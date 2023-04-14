import deadInsideGames from "../../assets/DIG.png";
import marvelForDummies from "../../assets/MFD.png";
import passwordGen from "../../assets/passwordGen.png";
import workschedule from "../../assets/work.png";
import traveltracker from "../../assets/TT.png";
import React from "react";
import "../../App.css";
import "../../styles/Portfolio.css";
import ProjectCard from "../ProjectCard";

export default function Portfolio() {
  const projectList = [
    {
      id: 0,
      name: "Dead Inside Games",
      technologies: "MongoDB, Mongoose, GraphQL, Express.js, Node.js, React",
      github: "https://github.com/Dev-Devin/Dead-inside-games-new",
      deployed: "https://desolate-stream-37841.herokuapp.com/signup",
      image: deadInsideGames,
    },
    {
      id: 1,
      name: "Travel Tracker",
      technologies: "HTML, CSS, JavaScript, Client & Server Side APIs",
      github: "https://github.com/Dev-Devin/travel-tracker-forked",
      deployed: " https://dev-devin.github.io/travel-tracker-forked/",
      image: traveltracker,
    },
    {
      id: 2,
      name: "Marvel for Dummies",
      technologies: "HTML, CSS, JavaScript, Client & Server Side APIs",
      github: "https://github.com/Dev-Devin/marvel-for-dummies",
      deployed: " https://dev-devin.github.io/marvel-for-dummies/",
      image: marvelForDummies,
    },

    {
      id: 3,
      name: "Password Generator",
      technologies: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize",
      github: "https://github.com/Dev-Devin/New-PASSWORD-GEN",
      deployed: "https://dev-devin.github.io/New-PASSWORD-GEN/",
      image: passwordGen,
    },
    {
      id: 4,
      name: "Work Day Scheduler",
      technologies: "HTML, CSS, JavaScript",
      github: "https://github.com/Dev-Devin/NEW-WORK-DAY-SCHEDULER",
      deployed: "https://github.com/Dev-Devin/NEW-WORK-DAY-SCHEDULER",
      image: workschedule,
    },
  ];
  return (
    <div className="portfolio container">
      {/* <h2 className='title'>MY PROJECTS</h2> */}
      <h3 className="subtitle">Projects I have developed</h3>
      <div className="content project">
        {projectList.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              name={project.name}
              image={project.image}
              technologies={project.technologies}
              deployed={project.deployed}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
}
