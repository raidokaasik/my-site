import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [mailSent, setMailSent] = React.useState(false);

  // EMAIL JS Form submission
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_b96exus",
        "template_yaulwq7",
        event.target,
        "user_C2fAucUjs6M8lHOKqJFCq"
      )
      .then(
        (result) => {
          console.log(result);
          setMailSent(true);
        },
        (error) => {
          console.log(error);
        }
      );
    event.target.reset();
  };

  const onScreenAlert = (
    <div className="onscreen-alert">
      <h2>Thank you for your e-mail!</h2>
      <p>I will get in contact with you as soon as possible.</p>
    </div>
  );

  const form = mailSent ? (
    onScreenAlert
  ) : (
    <form onSubmit={sendEmail}>
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
        rows="7"
        cols="50"
        name="message"
        placeholder="Message"
      />
      <input type="submit" className="send-button" value="SEND" />
    </form>
  );

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-title-and-arrow">
          <p>CONTACT ME</p>
          <div className="arrow">></div>
        </div>
        <div className="contact-info">
          <h2 className="contact-heading-sm">
            If you have any questions or requests, contact me below.
          </h2>
          {form}
        </div>
      </div>
    </div>
  );
};

export default Contact;
