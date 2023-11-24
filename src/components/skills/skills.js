import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span><br />
      <span className="skillDesc">
        I'm a skilled web designer with experience in creating visually
        appealing and user friendly websites.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImmg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImmg" />
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImmg" />
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
