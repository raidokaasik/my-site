import React from "react";
import "./Contact.css";

const contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading-lg">CONTACT ME</h1>
      <h2 className="contact-heading-sm">
        If you have any questions or requests, contact me below
      </h2>
      <div className="contact-info">
        <div class="box">
          <h3 class="text-secondary">Email:</h3>
          <h3>contactme@test.ee</h3>
        </div>
      </div>
    </div>
  );
};

export default contact;
