import React from "react";
import me from "../assets/me.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div>
        <h1>Salina Malek</h1>
        <img className="imgMe" src={me} />
        <div className="aboutText">
          <h3>
            I am a Full Stack Web Development Student at Pursuit, a
            Google-funded 12-month intensive coding program that provides
            experience with JavaScript, CSS, HTML, Node, and React. I aspire to
            be a software engineer that positively impacts the world.
          </h3>
          <h3>
            I hope to further develop my skills in full stack web development by
            picking up more programming languages and libraries, and I hope to
            collaborate with other developers on new projects!{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
