import React, { useEffect, useState } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import emailjs from "emailjs-com";
import "./Contacts.scss";

import {
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

export default function Contacts() {
  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");


  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "black !important",
    });
    addRule(".nav-link", {
      color: "black !important",
    });
    document.querySelector(".burger").style.color = "black";
  }, []);

  if (new Date().getTime() > parseInt(window.localStorage.sendingTime)) {
    window.localStorage.isSent = false;
  }

  function sendEmail(e) {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "portfolio",
        "template_8jgfmuf",
        {
          to_name: "Isaac",
          from_name: name,
          reply_to: email,
          message: textarea,
        },
        "user_zZyJpidmk3ln5DDX8uvhp"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log(result.text);
            window.localStorage.isSent = true;

            //1s === 1000ms
            window.localStorage.sendingTime = new Date().getTime() + 10000;
            setIsSending(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setTextarea("");
  }

  const safeForm = () => {
    if (window.localStorage.isSent === "true") {
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" value={name}  onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" name="user_email" value={email}  onChange={(e) => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea name="message" value={textarea}  onChange={(e) => setTextarea(e.target.value)} />
          <input
            className="sent"
            type="submit"
            disabled
            value="Message's sent"
          />
          <p className="clue">
            *You'll be able to send an another message after 5 min
          </p>
        </form>
      );
    } else {
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            vvalue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          {isSending ? (
            <input className="sending" type="submit" value="Sending" />
          ) : (
            <input type="submit" value="Send" />
          )}
        </form>
      );
    }
  };

  return (
    <div className="contactsContainer">
      <h1 className="pageTitle">{data.contact.pageTitle}</h1>

      <div className="body">
        <div className="contactsColumn">
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

            <a href={"https://www." + data.contact.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
              {data.contact.socialMedia.linkedin}
            </a>

          </div>
        </div>
        <div className="formColumn">
          {safeForm()}
        </div>
      </div>
    </div>
  );
}
