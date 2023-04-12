import React from "react";
import "../../App.css";
import me from "../../assets/me.png";

export default function About() {
  return (
    <section className="container">
      {/* <h2 className="title">Devin Polichetti</h2> */}
      <h3 className="subtitle">Devin Polichetti</h3>
      <div className="content">
        <div className="container">
          <div className="row" id="about-col">
            <div className="col-sm-6">
              <p className="about">
                I am a talented and forward-thinking full stack web developer
                who has gained extensive proficiency in HTML, CSS, JavaScript,
                React.js, MySQL, and other cutting-edge technologies through
                rigorous training at Columbia University's renowned full stack
                development certificate program. With a strong emphasis on
                creating meaningful applications, I am skilled in designing and
                developing projects from concept to production, showcasing my
                innovative and problem-solving approach.
              </p>
            </div>
            <div className="col-sm-6">
              <img className="avatar" src={me} alt="picture" />
            </div>
          </div>
          <p className="about"></p>
          <p className="about">
            I'm a highly motivated full stack web developer with a
            Bachelor's degree in Computer Science and Information Security.
            Recently, I completed a rigorous full stack web development bootcamp
            at Columbia University, where I gained expertise in HTML, CSS,
            JavaScript, React.js, MySQL, and more. I'm passionate about creating
            meaningful and user-friendly web applications, and I approach every
            project with a creative and solutions-driven mindset. With a strong
            educational background and recent bootcamp experience, I am
            well-prepared to design and develop innovative web applications,
            pushing the boundaries of what is possible in the world of web
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
