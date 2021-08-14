import React, { useEffect, useState } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import emailjs from "emailjs-com";
import "./Contacts.scss";

import { FaVimeoV } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

export default function Contacts(props) {








  const [forceUpdate, setForceUpdate] = useState("")
  const [isSending, setIsSending] = useState(false);
  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "black !important",
    });
    addRule(".nav-link", {
      color: "black !important",
    });
  }, []);


  if(new Date().getTime() > parseInt(window.localStorage.sendingTime)) {
    window.localStorage.isSent = false;
  }


  function sendEmail(e) {
    e.preventDefault();
    setIsSending(true)

    emailjs
      .sendForm(
        "portfolio",
        "template_8jgfmuf",
        e.target,
        "user_zZyJpidmk3ln5DDX8uvhp"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log(result.text);
            window.localStorage.isSent = true;

            //1s === 1000ms
            window.localStorage.sendingTime = new Date().getTime() + 10000;
            setIsSending(false)


          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const safeForm = () => {
    if (window.localStorage.isSent === "true") {
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="sent" type="submit" disabled value="Message's sent" />
          <p className="clue">*You'll be able to send an another message after 5min</p>
        </form>
      );
    } else {
      return (<form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        {isSending? <input className="sending" type="submit" value="Sending" /> : <input type="submit" value="Send" />}
      </form>)
    }
  };

  return (
    <div className="contactsContainer">
      <h1 className="pageTitle">{data.contact.pageTitle}</h1>

      <div className="body">
        <div className="contactsColumn">
          <p>You can reach me by the following contacts:</p>
          <div className="contacts">
            <a href={"mailto:" + data.contact.email}>
              <AiOutlineMail />
              {data.contact.email}
            </a>
            <a href={"tel:" + data.contact.phoneNumber}>
              <AiOutlinePhone />
              {data.contact.phoneNumber}
            </a>
          </div>
          <div className="media">
            <p>me on social media</p>
            <a href={data.contact.socialMedia.facebook}>
              <AiFillFacebook></AiFillFacebook>
              {data.contact.socialMedia.facebook}
            </a>
            <a href={data.contact.socialMedia.linkedin}>
              <AiFillLinkedin />
              {data.contact.socialMedia.linkedin}
            </a>
            <a href={data.contact.socialMedia.vimeo}>
              <FaVimeoV />
              {data.contact.socialMedia.vimeo}
            </a>
          </div>
        </div>
        <div className="formColumn">
          <p>or just write me a message in the form below</p>
        {safeForm()}
        </div>
      </div>
    </div>
  );
}
