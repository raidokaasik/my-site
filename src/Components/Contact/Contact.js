import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [email, setEmail] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
        },
        (error) => {
          console.log(error);
        }
      );
    event.target.reset();
  };

  // React Hook Form
  const onSubmit = (data) => {
    console.log(data);
  };

  const { register, handleSubmit, errors } = useForm();

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-heading-lg">
          <h1>CONTACT ME</h1>
        </div>

        <h2 className="contact-heading-sm">
          If you have any questions or requests, contact me below
        </h2>
        <form className="contact-info" onSubmit={sendEmail}>
          <input
            ref={register({ required: true })}
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          {errors.name && errors.name.type === "required" && (
            <p>Name is required</p>
          )}
          <input
            ref={register({ required: true })}
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            ref={register({ required: true })}
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            ref={register({ required: true })}
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

export default Contact;
