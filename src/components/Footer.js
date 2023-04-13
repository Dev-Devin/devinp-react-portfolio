import React from "react";
import { Github, Medium, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer" style={{ width: "100%", height: "150px" }}>
      {/* <div className="" style= {{border:"1px solid black",position:"absolute"}}> */}
      <div className="col item social">
        <a href="https://github.com/Dev-Devin" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/devin-polichetti-8b1b1b1b3/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a href="https://medium.com/@devinpolichetti" target="_blank">
          <Medium />
        </a>
      </div>
      <p className="copyright">Devin Polichetti&copy; 2023</p>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
