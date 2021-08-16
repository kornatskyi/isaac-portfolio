import React, { useEffect } from "react";
import "./Home.scss";
import video from "../../assets/videos/background.webm";
import data from "../../data.json";
import { Link } from "react-router-dom";

import { addRule } from "../../utils/utilFunctions";

const getImgPath = (imgName) => {
  return require("../../assets/images/projects/" + imgName).default;
};

export default function Home(props) {
  //Change nav links color
  useEffect(() => {
    addRule(".nav-link:after", {
      "border-color": "white !important",
    });
    addRule(".nav-link", {
      color: "white !important",
    });
  }, []);

  return (
    <div className="homeContainer">
      {/* autoPlay */}
      <div className="mainSection">
        <video muted loop className="videoBackground">
          <source src={video} type="video/mp4" />
        </video>
        <div className="nameContainer">
          <h1 className="name h1">{data.name}</h1>
        </div>
      </div>
      <div className="projectsContainer">
        {data.projects.map((project, i) => {
          return (
            <div key={i} className="project">
              <Link
                to={{
                  pathname: "/project",
                  state: {
                    name: project.name,
                  },
                }}
              >
                <h4>{project.name}</h4>
              </Link>
              <div>
                <div className="top"></div>
                <img src={getImgPath(project.img)} alt="" />
                <div className="bottom">
                  <p>Read more about this project</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
