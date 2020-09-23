import React from "react";
import "../../styles/main_style.css";
import SingleSkill from "./SingleSkill";
const SkillBox = ({ skills, title, icon }) => {
  return (
    <div className=" col-12 col-lg-4 pl-0 pr-0 pl-md-2 pr-md-2">
      <div className=" skills-block   mb-5 mb-3 mb-lg-0">
        <div className="inner-skills">
          <h6>{title}</h6>
          <SingleSkill skills={skills} />
        </div>
        <div className="circle_logo">
          <i className={icon} data-aos="flip-left"></i>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
