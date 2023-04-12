import React from "react";
import  projectList  from "../../helpers/ProjectsList";
import "../../App.css";
import "../../styles/Portfolio.css";
import ProjectCard from "../ProjectCard";

export default function Portfolio() {
  
  return (
    <div className="portfolio container">
      {/* <h2 className='title'>MY PROJECTS</h2> */}
      <h3 className="subtitle">Projects I have developed</h3>
      <div className="content project">
        {projectList.map((project, index) => {
          
          <ProjectCard
              project={project}
              key={index}
              // name={project.name}
              // image={project.image}
              // technologies={project.technologies}
              // deployed={project.deployed}
              // github={project.github}
            />
         
        })}
      </div>
    </div>
  );
}
