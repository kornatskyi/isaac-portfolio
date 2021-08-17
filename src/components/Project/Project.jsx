import React, { useEffect } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import { useParams } from "react-router-dom";

import "./Project.scss";

function Project() {
  const { name } = useParams();
  const project = data.projects.find(
    (project) => project.name.split(/[^A-Za-z]/).join("") === name
  );

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
    return {
      __html: `<iframe src="https://player.vimeo.com/video/${project.id}"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`,
    };
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
