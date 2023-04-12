import React from "react";
import "../../App.css";
import avatar from "../../assets/avatar.jpeg";

export default function About() {
  return (
    <section className="container">
      {/* <h2 className="title">I'M LAURA</h2> */}
      <h3 className="subtitle">hi! i'm laura</h3>
      <div className="content">
        <div className="container">
          <div className="row" id="about-col">
            <div className="col-sm-6">
              <p className="about">
                I'm a creative and solutions-driven full stack web developer who
                recently earned a certificate in full stack development from
                Columbia University. I have honed skills in HTML, CSS,
                JavaScript, React.js, MySQL, and more to design and build
                meaningful applications from ideation to production.
              </p>
            </div>
            <div className="col-sm-6">
              <img className="avatar" src={avatar} alt="avatar" />
            </div>
          </div>
          <p className="about"></p>
          <p className="about">
            I have 8+ years of professional experience in a variety of
            operational roles in New York. Most recently, I served as Chief of
            Staff to the COO at a healthcare tech startup where I spent a lot of
            time collaborating with engineers and developers, ultimately
            inspiring me to make a pivot. Leveraging my background in
            operations, I am able to take users’ needs and issues, translate to
            product solutions, and execute the technical work.
          </p>
        </div>
      </div>
    </section>
  );
}
