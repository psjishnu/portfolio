import React from "react";
import "../../styles/main_style.css";

const SingleSkill = ({ skills }) => {
  return (
    <div>
      {skills.map((element, index) => (
        <div className="d-flex" key={index + 1}>
          <i className="mr-2 ml-2 fas fa-check"></i>
          <p>{element}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleSkill;
