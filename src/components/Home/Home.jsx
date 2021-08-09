import React from "react";
import "./Home.scss";
import video from "../../assets/videos/background.webm";
import data from '../../data.json'

export default function Home() {
  return (
    <div className="container">
      <video autoPlay muted loop className="videoBackground">
        <source src={video} type="video/mp4" />
      </video>
      <h1 className="name">{data.name} </h1>
    </div>
  );
}

