import React from "react";
import "../../App.css";
import Workresume from "./Resume.pdf";
import  iconPdf  from "../../assets/pdf.png";

export default function Resume() {
  return (
    <section
      className="container"
      style={{
        paddingTop: "25px",
      }}
    >
      {/* <h2 className='title'>RESUME</h2> */}

      <div className="resume"style={{margin: "3em"
      }}>
        <a href={Workresume} download="Devin Polichetti Resume">
          <img
            className="pdf"
            src={iconPdf}
            alt="pdf"
            style={{ width: "120px" }}
          />
        </a>
      </div>
      <div
        className="content"
        id="skills-section"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50vh",
          alignItems: "center",
        }}
      >
        <div className="skillsContainer">
          <div className="proficiencies">
            <h4 className="resume-title">Front & Back End Proficiencies</h4>
            <div className="container skills">
              <div className="row">
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>HTML5/CSS3</li>
                      <li>JavaScript</li>
                      <li>JSON</li>
                      <li>jQuery</li>
                      <li>MVC</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>MERN Stack</li>
                      <li>Jest</li>
                      <li>Insomnia</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>Express.js</li>
                      <li>GraphQL</li>
                      <li>Apollo Client/Server</li>
                      <li>APIs</li>
                      <li>Bootstrap</li>
                      <li>CSS</li>
                      <li>DOM</li>
                      <li>Git</li>
                      <li>Handlebars</li>
                      <li>Heroku</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>Node.js</li>
                      <li>React</li>
                      <li>PWA</li>
                      <li>OOP</li>
                      <li>ORM</li>
                      <li>RESTful APIs</li>
                      <li>MySQL</li>
                      <li>Sequelize</li>
                      <li>NoSQL</li>
                      <li>Webpack</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="resume-title">Other Skills</h4>
            <div className="container skills">
              <div className="row">
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>VSCODE</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>Excel</li>
                      <li>Powerpoint</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="skills-column">
                    <ul
                      className="skills-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>Adobe</li>
                      <li>Prezi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
