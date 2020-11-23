import React from "react";
import "./Contact.css";

const contact = () => {
  return (
    <div id="contact">
      <h1 className="contact-heading-lg">CONTACT ME</h1>
      <div className="contact-container">
        <div className="contact-break"></div>
        <h2 className="contact-heading-sm">
          If you have any questions or requests, contact me below
        </h2>
        <div className="contact-info">
          <div className="box">
            <h3 className="text-secondary">Email:</h3>
            <h3>contactme@test.ee</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
