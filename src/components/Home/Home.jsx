import React from "react";
import "./Home.scss";
import video from "../../assets/videos/background.webm";
import data from "../../data.json";

export default function Home(props) {
  return (
    <div className="container">
      {/* autoPlay */}
      <video  muted  loop className="videoBackground">
        <source src={video} type="video/mp4" />
      </video>


      <div className="nameContainer">
        <h1 className="name h1">{data.name}</h1>
      </div>
    </div>
  );
}
