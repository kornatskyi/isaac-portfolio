import React, { useEffect } from "react";
import "./Home.scss";
import video from "../../assets/videos/background.mp4";
import data from "../../data.json";
import { Link } from "react-router-dom";
import {BsPlay} from "react-icons/bs"

import { addRule } from "../../utils/utilFunctions";

const getImgPath = (imgName) => {
  return require("../../assets/images/projects/" + imgName);
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
    document.querySelector(".burger").style.color = "white";
  }, []);

  return (
    <div className="homeContainer">
      <div className="mainSection">
        <video muted autoPlay loop className="videoBackground">
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
                  //have to split and join string to remove all non alphabetical characters for an easier comparison with name in the Project component
                  pathname: `/project/${project.name
                    .split(/[^A-Za-z]/)
                    .join("")}`,
                  state: {
                    name: project.name,
                  },
                  query: { name: project.name },
                }}
              >
                <h4>{project.name}</h4>
                <div>
                  <img src={getImgPath(project.img)} alt="" />
                  <div className="bottom">
                    {/* <p>Project details</p> */}
                    <BsPlay />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
