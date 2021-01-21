import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const contact = () => {
  const sendEmail = event => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_b96exus",
        "template_yaulwq7",
        event.target,
        "user_C2fAucUjs6M8lHOKqJFCq"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div id="contact">
      <h1 className="contact-heading-lg">CONTACT ME</h1>
      <div className="contact-container">
        {/* <div className="contact-break"></div> */}
        <h2 className="contact-heading-sm">
          If you have any questions or requests, contact me below
        </h2>
        <form className="contact-info" onSubmit={sendEmail}>
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="contact-input"
            type="textarea"
            rows="4"
            cols="50"
            name="message"
            placeholder="Message"
          />
          <input type="submit" className="send-button" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default contact;
