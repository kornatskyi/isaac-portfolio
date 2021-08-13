import React, { useEffect } from "react";
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
  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "black !important",
    });
    addRule(".nav-link", {
      color: "black !important",
    });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio",
        "template_8jgfmuf",
        e.target,
        "user_zZyJpidmk3ln5DDX8uvhp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
