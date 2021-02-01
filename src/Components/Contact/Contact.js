import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Input from "../UI/Input/Input.js";

const Contact = () => {
  const [state, setState] = React.useState({
    customer: {
      name: {
        placeholder: "Your Name",
        isValid: false,
        minLength: 5,
        isTouched: false,
        type: "text",
        inputVariant: "input",
        label: "Name",
      },
      email: {
        placeholder: "Your Email",
        isValid: false,
        minLength: 8,
        isTouched: false,
        type: "email",
        inputVariant: "input",
        label: "Email",
      },
      subject: {
        placeholder: "Subject",
        isValid: false,
        minLength: 3,
        isTouched: false,
        type: "text",
        inputVariant: "input",
        label: "Subject",
      },
      message: {
        placeholder: "Your Message",
        isValid: false,
        minLength: 5,
        isTouched: false,
        type: "text",
        inputVariant: "textarea",
        label: "Message",
      },
      isDisabled: true,
    },
  });
  const [mailSent, setMailSent] = React.useState(false);

  // Input field Validator

  const validator = (target) => {
    let isValid = false;
    const targetMinLenght = state.customer[target.name];
    if (target.value.length < targetMinLenght.minLength) {
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  };

  // Checks if the Input has been touched or not

  const isTouched = (target) => {
    let isTouched = false;
    if (target.length > 0) {
      isTouched = true;
    } else if (target.length === 0) {
      isTouched = false;
    }
    return isTouched;
  };

  // Checks if all the input fields are validated

  const checkFormInputs = () => {
    const input = state.customer;
    let formDisabled = true;
    if (
      input.name.isValid &&
      input.email.isValid &&
      input.subject.isValid &&
      input.message.isValid
    ) {
      formDisabled = false;
    } else {
      formDisabled = true;
    }
    return formDisabled;
  };

  // EMAIL JS Form submission

  const sendEmail = (event) => {
    event.preventDefault();

    if (!state.customer.isDisabled) {
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
    }

    event.target.reset();
  };

  // Input Handler

  const inputHandler = (event) => {
    const updateForm = { ...state.customer };
    const updateCustomerElement = updateForm[event.target.name];
    updateForm.isDisabled = checkFormInputs();
    updateCustomerElement.isTouched = isTouched(event.target.value);
    updateCustomerElement.isValid = validator(event.target);
    if (updateCustomerElement.isTouched && !updateCustomerElement.isValid) {
      updateCustomerElement.label =
        "minimum " + updateCustomerElement.minLength + " characters required";
    } else {
      updateCustomerElement.label =
        event.target.name[0].toUpperCase() + event.target.name.substring(1);
    }
    setState({ customer: updateForm });
  };

  // A notification that appears on screen with a text if the email is sent succesfully.

  const notification = (
    <div className="onscreen-alert">
      <h2>Thank you for your e-mail!</h2>
      <p>I will get in contact with you as soon as possible.</p>
    </div>
  );

  // Pushing state Customer into an array of objects to map through in Form

  const customerArray = [];
  for (let item in state.customer) {
    customerArray.push({
      id: item,
      config: state.customer[item],
    });
  }
  // When mail is sent succesfully, form is replaced with a notification.

  const form = mailSent ? (
    notification
  ) : (
    <form onSubmit={sendEmail}>
      {customerArray.map((item, index) => (
        <div>
          <label name={item.id}>{item.config.label}</label>
          <Input
            key={item + index}
            // placeholder={item.config.placeholder}
            variant={item.config.inputVariant}
            type={item.config.type}
            name={item.id}
            onChange={inputHandler}
          />
        </div>
      ))}
      <input
        type="submit"
        className="send-button"
        value="SEND"
        disabled={state.customer.isDisabled}
      />
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
