import React from "react";
import { Github, Medium, Linkedin } from "react-bootstrap-icons";
// import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col item social">
          <a href="https://github.com/Dev-Devin" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/devin-polichetti-8b1b1b1b3/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://medium.com/@devinpolichetti" target="_blank">
            <i class="fa-brands fa-medium"></i>
          </a>
        </div>
        <p className="copyright">Devin Polichetti&copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
