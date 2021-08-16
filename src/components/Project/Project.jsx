import React, { useEffect } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import { useLocation } from "react-router-dom";

import "./Project.scss";

function Project() {
  const location = useLocation();
  const state = location.state;
  const project = data.projects.find((project) => project.name === state.name);

  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "black !important",
    });
    addRule(".nav-link", {
      color: "black !important",
    });
  }, []);

  function createMarkup(project) {
    return { __html: project.embed };
  }
  return (
    <div className="projectContainer">
      <h1 className="title">{project.name}</h1>
      <div
        className="videoContainer"
        dangerouslySetInnerHTML={createMarkup(project)}
      ></div>

      <div className="projectDescription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt
        soluta laudantium quasi, alias a. Vero numquam consequatur aut non
        distinctio architecto. Sunt blanditiis, fugit eius veniam odio quia
        vitae.
      </div>
    </div>
  );
}

export default Project;
