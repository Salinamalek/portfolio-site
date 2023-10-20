import React from "react";
import codingbg from "../assets/codingbg.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <h1>Salina Malek</h1>
        <h2>Welcome to my Personal Portfolio Site!</h2>
        <img className="codingBg" src={codingbg} />
      </div>
    </div>
  );
}
