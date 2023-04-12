import React from "react";
import { Github, Medium, Linkedin } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col item social">
          <a href="https://github.com/Dev-Devin" target="_blank">
            <i className="icon">
              <Github />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/devin-polichetti-8b1b1b1b3/"
            target="_blank"
          >
            <i class="icon">
              <Linkedin />
            </i>
          </a>
          <a href="https://medium.com/@devinpolichetti" target="_blank">
            <i className="icon">
              <Medium />
            </i>
          </a>
        </div>
        <p className="copyright">Devin Polichetti&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
