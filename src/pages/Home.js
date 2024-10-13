import React from "react";
import codingbg from "../assets/codingbg.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="heading">
        <h1>Salina Malek</h1>
        <h2>Welcome to my Portfolio Site!</h2>
        <img className="codingBg" src={codingbg} alt="coding-img" />
      </div>
      <div>
        <h2>Technical Skills</h2>
        <h3>
          <ul>
            <li>
              FRONT END: JavaScript(ES5 and ES6), Python, React, HTML5, CSS3
            </li>
            <br></br>
            <li>
              BACK END: Node.js, Express, PostgresSQL, RESTful API Development
            </li>
            <br></br>
            <li>TESTING & DEPLOYMENT: Jest, Git, npm</li>
            <br></br>
            <li>LIBRARIES & FRAMEWORKS: Material-UI, Tailwind CSS</li>
          </ul>
        </h3>
        <h2>Experience</h2>
        <h3>
          <ul>
            <li>Full Stack Software Engineer Fellow at Pursuit since 2022</li>
            <br></br>
            <li>
              Mastering full-stack web development, focusing on real-world
              applications.
            </li>
            <br></br>
            <li>
              Learning and mastering full stack web development, utilizing
              technologies such as Javascript, Python, React, Data Structures,
              Algorithms, and APIs.
            </li>
            <br></br>
            <li>
              Building real-world applications as a key participant in the
              fellowship program.
            </li>
            <br></br>
            <li>
              Collaborating with 5+ peers on end-to-end development projects
            </li>
            <br></br>
            <li>
              Developing critical skills such as problem-solving, team
              collaboration, and effective communication
            </li>
            <br></br>
            <li>
              Conducted code reviews and led pair-programming sessions,
              contributing to better code quality and faster troubleshooting
            </li>
            <br></br>
            <li>
              Implemented data structures and algorithms, reducing application
              processing times by 15%
            </li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
