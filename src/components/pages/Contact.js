import React from "react";
import "../../App.css";
export default function Contact() {
  return (
    <section className="container">
      {/* <h2 className="title">CONTACT</h2> */}
      <h3 className="subtitle">Welcome!</h3>
      {/* <form className='form'>
                <input className='formName' name='name' type='text' placeholder='name'/>
                <input className='formEmail'name='email' type='email' placeholder='email'/>
                <input className='formMessage' name='message' type='textArea' placeholder='message'/>
                <input className='btn btn-success formButton' type='submit' value='Send'/>
            </form> */}
      <div className="content" id="contact-content">
        <p>
          Feel free to contact me with any inquiries or potential collaboration
          opportunities. I'm open to discussing any questions or projects you
          may have.
        </p>
        <ul id="contact-list">
          <li>
            <b>EMAIL:</b>
            <a href="mailto:devinpolichetti@gmail.com">
              DEVINPOLICHETTI@GMAIL.COM
            </a>
          </li>
          <li>
            <b>VIEW ME ONLINE:</b>{" "}
            <a
              href="https://www.linkedin.com/in/devin-p-bb831a220/"
              target="_blank"
            >
              LINKEDIN
            </a>{" "}
            /{" "}
            <a href="https://github.com/Dev-Devin" target="_blank">
              GITHUB
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
};
  