import React, { useEffect } from "react";

//Styles
import "./About.scss";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";

export default function About(props) {
  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "black !important",
    });
    addRule(".nav-link", {
      color: "black !important",
    });
    document.querySelector('.burger').style.color = "black";
  }, []);

  return (
    <div className="aboutContainer">
      <h1 className="pageTitle">{data.about.pageTitle}</h1>

      <div className="body">
        {data.about.body.map((section, i) => {
          return (
            <div key={i}>
              
              <h5>{section.title}</h5>
              <p>{section.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
