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
    <div>
      <div className="contact-header">
        <h1 id="contact-heading-lg">CONTACT ME</h1>
      </div>
      <div id="contact">
        {/* <h1 className="contact-heading-lg">CONTACT ME</h1> */}
        <div className="contact-container">
          {/* <div className="contact-break"></div> */}
          <h2 className="contact-heading-sm">
            If you have any questions or requests, contact me below
          </h2>
          <form className="contact-info" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="textarea" name="message" placeholder="Message" />
            <input type="submit" className="send-button" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
