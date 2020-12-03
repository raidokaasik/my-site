import React from "react";
import "./Contact.css";

const contact = () => {
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
          <div className="contact-info">
            <div className="box">
              <h3>contactme@test.ee</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="attached-footer">
        <p>Copyright &copy; 2020</p>
      </div>
    </div>
  );
};

export default contact;
