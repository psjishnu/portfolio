import React from "react";
import "../../styles/main_style.css";
import SkillBox from "./SkillBox";

const Skils = () => {
  const Frontend = [
    "React/Redux/Hooks",
    "Javascript",
    "HTML/CSS/SASS",
    "Bootstrap ",
    "Vuejs",
  ];
  const Backend = ["Node.js", "Python", "mySQL/MongoDB", "Express", "Nestjs"];
  const Others = [
    "Cloud (Azure)",
    "Visual Studio Code",
    "Postman",
    "Heroku/Netlify",
    "C/C++/Java",
  ];

  return (
    <div className="">
      <section id="skills" className="pt-1">
        <div className="container ">
          {/* <h2 style={{ letterSpacing: ".5rem" }} data-aos="fade-left" id="about_title" className="lead skils_title  lett_spec ">Skills</h2> */}
          <h2 style={{ color: "white" }} className="about_title ">
            Skills{" "}
          </h2>

          <div className="row  mt-5">
            <SkillBox
              skills={Frontend}
              title={"Frontend"}
              icon={"fas fa-paint-brush"}
            />
            <SkillBox
              skills={Backend}
              title={"Backend"}
              icon={"fas fa-database"}
            />
            <SkillBox skills={Others} title={"Others"} icon={"fas fa-tools"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skils;
