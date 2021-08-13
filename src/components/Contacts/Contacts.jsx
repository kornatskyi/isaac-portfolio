import React, { useEffect } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import emailjs from "emailjs-com";

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
      .sendForm("portfolio", "template_8jgfmuf", e.target, "user_zZyJpidmk3ln5DDX8uvhp")
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
            <div className="contact">
              <a href={"mailto:" + data.contact.email}>{data.contact.email}</a>
              <a href={"tel:" + data.contact.phoneNumber}>
                {data.contact.phoneNumber}
              </a>
            </div>
          </div>
          <div className="media">
            <p>me on social media</p>
            <a href={data.contact.socialMedia.facebook}>
              {data.contact.socialMedia.facebook}
            </a>
            <a href={data.contact.socialMedia.linkedin}>
              {data.contact.socialMedia.linkedin}
            </a>
            <a href={data.contact.socialMedia.vimeo}>
              {data.contact.socialMedia.vimeo}
            </a>
          </div>
        </div>
        <div className="formColumn">
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
