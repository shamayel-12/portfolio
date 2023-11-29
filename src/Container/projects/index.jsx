import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../Components/pageheader";
import './style.scss'
import { projectData } from "./Data";
import { useState } from "react";

//0093705361512

const Projects = () => {

  const hundler = () => {
    return (
      projectData.map((project) => (
        <div><a>{project.project_url}</a></div>
      )))



  }

  return (
    <section id="projects" className="projects">

      <PageHeader headerText="My projects"
        icon={<BsInfoCircleFill size={40} />} />
      <div className="projects__content">



        <div className="projects__content__main" >
          {
            projectData.map((projects) => (
              <div className="projects__content__data"

              // onMouseEnter{() => hundleHover(index)}
              // onMouseLeave{() => hundleHover(null)}
              >


                <div><h3>{projects.project_name}</h3>

                </div>
                <div onClick={hundler}>
                  <a href={projects.project_url} >
                    <img id="Image-part" src={projects.project_image} />
                  </a>
                </div>
                <div>
                  <p>{projects.project_desc}</p>
                </div>

                {/* <div className="Hover_item">
                  {
                    index === hundleHover && (
                      <div >
                        <p>{projects.project_name}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                  </div> */}

              </div>

            ))}
          <div></div>

        </div>



      </div>





    </section>
  )
}
export default Projects;