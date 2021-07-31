import React from "react";

const Projects = ({ gitlink, link, imgclass, name, desc }) => {
  return (
    <div className=" row m-0  mb-1 mb-md-5">
      <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
        <h4 className="project_name">{name}</h4>
        <p className="par_project">{desc}</p>
        <div className="d-flex">
          <div className=" d-flex justify-content-center justify-content-sm-start  ">
            <a
              className="button_Project"
              rel="noopener noreferrer"
              target="_blank"
              href={link}
            >
              See Live
            </a>
          </div>
          <div className=" d-flex justify-content-center justify-content-sm-start  ">
            <a
              className="githubicon"
              rel="noopener noreferrer"
              target="_blank"
              href={gitlink}
            >
              <i className="icon_footer mx-1 fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-8 col-sm-12 wrap_iamge_project">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <div
            className={`mt-5  ${imgclass} image_project img_project`}
            data-aos="fade-left"
          ></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
