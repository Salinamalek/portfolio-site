import React from "react";
import daydream from "../assets/daydream.png";
import init from "../assets/init.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectLinks">
        <div>
          <img className="projectImgs" src={daydream} alt="daydreamapp" />
          <br />
          <a
            href="https://daydream-bucketlist-sm.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Day Dream Bucket List App
          </a>
        </div>
        <div>
          <img className="projectImgs" src={init} alt="initapp" />
          <br />
          <a
            href="https://init-jobs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            inIT Job Search App
          </a>
        </div>
        {/* <div>
          <img className="projectImgs" src={daydream} />
          <br />
          <a href="https://daydream-bucketlist-sm.netlify.app/">
            Day Dream Bucket List App
          </a>
        </div> */}
      </div>
    </div>
  );
}
