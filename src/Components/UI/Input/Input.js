import React from "react";
import "./Input.css";

const Input = (props) => {
  switch (props.variant) {
    case "input":
      return (
        <input
          className="contact-input"
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    case "textarea":
      return (
        <textarea
          className="contact-input-textarea"
          rows="7"
          cols="50"
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    default:
      return null;
  }
};

export default Input;
