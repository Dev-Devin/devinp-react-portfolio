import React from "react";
import "../../App.css";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("meqwvnjq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="container contact">
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
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Contact Me</label>
          <input placeholder="Email.." id="email" type="email" name="email" />
          

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea  placeholder="Message..." id="message" name="message" />
          
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
  