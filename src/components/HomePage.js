import React, { useEffect } from "react";
import "../styles/main_style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Animate from "./animation";
import Skils from "./skils/Skills";
const PHOTO = require("./assets/jishnu.jpg");
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
            Hello, my name is{" "}
            <span className="primary-color-text">Jishnu P S</span>
            <br />
            and I'm a Full-Stack Developer.
          </h1>
          <div className="d-flex justify-content-center justify-content-md-start">
            <div className=" d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#skills">
                {" "}
                Skills{" "}
              </a>
            </div>
            <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#about">
                {" "}
                About me{" "}
              </a>
            </div>
            <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s">
              <a className="button_home" href="#projects">
                {" "}
                Projects{" "}
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
              India, who is more interested in Frontend Development.
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
                {" "}
                View Resume{" "}
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

              {/* PROJECT 1 */}
              <div className=" row m-0  mb-1 mb-md-5">
                <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
                  <h4 className="project_name">Coronasafe Stay</h4>
                  <p className="par_project">
                    A Full-Stack web application made using React.js as the
                    front-end framework. Nestjs and Express.js are used for
                    back-end server. A system to list and book hotels and corona
                    care centers for 14 day isolation in Kerala.
                  </p>
                  <div className="d-flex">
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="button_Project"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://stay.coronasafe.in/"
                      >
                        {" "}
                        See Live{" "}
                      </a>
                    </div>
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="githubicon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/psjishnu/stay_fe"
                      >
                        <i className="icon_footer mx-1 fab fa-github-square"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-sm-12 wrap_iamge_project">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stay.coronasafe.network/"
                  >
                    <div
                      className="mt-5  stay_fe image_project img_project"
                      data-aos="fade-left"
                    ></div>
                  </a>
                </div>
              </div>

              <div className=" row m-0  mb-1 mb-md-5">
                <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
                  <h4 className="project_name">
                    Skosh (Online restaurant App)
                  </h4>
                  <p className="par_project">
                    A platform like zomato for adding restaurant details,dishes
                    and customers can buy food items from the platform .
                    <br></br>
                    (Restaurant Owner side )
                  </p>
                  <div className="d-flex">
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="button_Project"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://skosh.netlify.app/"
                      >
                        {" "}
                        See Live{" "}
                      </a>
                    </div>
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="githubicon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Delivery-System-App/restaurant_fe"
                      >
                        <i className="icon_footer mx-1 fab fa-github-square"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-sm-12 wrap_iamge_project">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://skosh.netlify.app/"
                  >
                    <div
                      className="mt-5  skosh image_project img_project"
                      data-aos="fade-left"
                    ></div>
                  </a>
                </div>
              </div>

              <div className=" row m-0  mb-1 mb-md-5">
                <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
                  <h4 className="project_name">Covid-19 Chatbot and Survey</h4>
                  <p className="par_project">
                    A platform for Ashaworkers to do survey in easier way and an
                    integrated chatbot for commonfolk .
                  </p>
                  <div className="d-flex">
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="button_Project"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://helper-chatbot-fe.herokuapp.com/"
                      >
                        {" "}
                        See Live{" "}
                      </a>
                    </div>
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="githubicon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/psjishnu/chatbot-fe"
                      >
                        <i className="icon_footer mx-1 fab fa-github-square"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-sm-12 wrap_iamge_project">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://helper-chatbot-fe.herokuapp.com/"
                  >
                    <div
                      className="mt-5  chatbot image_project img_project"
                      data-aos="fade-left"
                    ></div>
                  </a>
                </div>
              </div>

              <div className=" row m-0  mb-1 mb-md-5">
                <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
                  <h4 className="project_name">Open Messenger</h4>
                  <p className="par_project">
                    An OpenSource Messenger App based on google login . It is
                    still on development
                  </p>
                  <div className="d-flex">
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="button_Project"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://openmessenger.netlify.app"
                      >
                        {" "}
                        See Live{" "}
                      </a>
                    </div>
                    <div className=" d-flex justify-content-center justify-content-sm-start  ">
                      <a
                        className="githubicon"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/openmessenger"
                      >
                        <i className="icon_footer mx-1 fab fa-github-square"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-sm-12 wrap_iamge_project">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://openmessenger.netlify.app"
                  >
                    <div
                      className="mt-5  openmessenger image_project img_project"
                      data-aos="fade-left"
                    ></div>
                  </a>
                </div>
              </div>
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
              {" "}
              Mail me{" "}
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
              {" "}
              <i className="icon_footer mr-2 fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/psjishnu"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <i className="icon_footer ml-2  mr-2 fab fa-github-square"></i>
            </a>
            <a
              href="https://facebook.com/jishnupsreekumar"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <i className="icon_footer ml-2 fab fa-facebook-square"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
