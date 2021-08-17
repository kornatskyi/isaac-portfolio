import React, { useEffect } from "react";
import { addRule } from "../../utils/utilFunctions";
import data from "../../data.json";
import { useParams } from "react-router-dom";

import "./Project.scss";

function Project() {
  const { name } = useParams();
  console.log(name);
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
  if (project) {
    return (
      <div className="projectContainer">
        <h1 className="title">{project.name}</h1>
        <div
          className="videoContainer"
          dangerouslySetInnerHTML={createMarkup(project)}
        ></div>

        <div className="projectDescription">
         {project.description}
        </div>
      </div>
    );
  } else {
    return (
      <div  className="projectContainer">
        <h1  className="title">404 No such a project</h1>
      </div>
    );
  }
}

export default Project;
