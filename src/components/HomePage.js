import React, { useEffect } from "react";
import "../styles/main_style.css";
import Aos from "aos";
import Projects from "./Projects";
import "aos/dist/aos.css";
import Animate from "./animation";
import Skils from "./skils/Skills";
const PHOTO = require("./assets/jishnu.jpg");
const projectData = require("./projectData");
const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div id="wrap_home_page" className="jumbotron">
        <div className="container">
          <Animate />
          <h1
            className="home_page-title animated bounceInLeft  delay-.9s"
            data-sr-id="4"
          >
            Hello, my name is
            <span className="primary-color-text">Jishnu P S</span>
            <br />
            and I'm a Full-Stack Developer.
          </h1>
          <div className="d-flex justify-content-center justify-content-md-start">
            <div className=" d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#skills">
                Skills
              </a>
            </div>
            <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#about">
                About me
              </a>
            </div>
            <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#projects">
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <Skils />

      <section id="about" className="p-0">
        <div className="container ">
          <h2 className="about_title ">About me</h2>
          <div className="photodiv">
            <img src={PHOTO} className="profilephoto" alt="profile"></img>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="Wrap_text row "
          >
            <p data-aos="fade-left" className="text_about">
              Hello, I am Jishnu, a Full Stack Web Developer, from Kerala,
              India, who is more interested in Frontend Development. I am
              current working as Assocaite Engineer at
              <b> Litmus7 </b> . I am working as a react js developer.
              <br></br>
              <br></br>
              Despite my preferences, I always try to keep up to date with other
              programming languages and frameworks so that I can keep improving
              my knowledge and skills. I believe in always choosing the best
              technology for the job, even if we need to get out of our comfort
              zone.
              <br></br>
              <br></br>I have a strong focus on software quality and clean code.
              <br></br>
              <br></br>I am eager to learn new things .<br></br>
            </p>

            <div className="mt-5 d-flex justify-content-center justify-content-sm-start  ">
              <a
                rel="noopener noreferrer"
                id="view"
                className="button_about"
                target="_blank"
                href="https://github.com/psjishnu/portfolio/raw/master/public/Jishnu_Resume.pdf"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>
      <section id="projects">
        {/* Project */}
        <div style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="wrap_project ">
              <h2 className="project_title ">Projects</h2>
              {projectData.map((value) => (
                <Projects {...value} />
              ))}
            </div>
          </div>
        </div>
        {/* FOOTER */}
      </section>

      <div className="footer">
        <section id="contact">
          <h2 data-aos="fade-right" className="about_title p-0  ">
            CONTACT
          </h2>
          <p data-aos="fade-left" className="lead secondery_title">
            Email : psjishnu13@gmail.com
          </p>
          <div className=" d-flex justify-content-center   " data-aos="fade-up">
            <a
              style={{ fontWeight: "bold" }}
              className="button_about"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto: psjishnu13@gmail.com"
            >
              Mail me
            </a>
          </div>
        </section>

        <section id="footer">
          <div
            className="wrap_angle"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <a href="#wrap_home_page">
              <i className="angle_up fas fa-angle-double-up"></i>
            </a>
          </div>
          <div className="mt-3 wrap_icos">
            <a
              href="https://www.linkedin.com/in/jishnupsreekumar/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="icon_footer mr-2 fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/psjishnu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="icon_footer ml-2  mr-2 fab fa-github-square"></i>
            </a>
            <a
              href="https://facebook.com/jishnupsreekumar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="icon_footer ml-2 fab fa-facebook-square"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
