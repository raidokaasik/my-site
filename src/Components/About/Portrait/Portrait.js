import React from "react";
import "./Portrait.css";
// import ImageLeft from "../../../images/portrait3.png";
// import ImageRight from "../../../images/portrait4.png";
import Portrait from "../../../images/portrait2.jpg";

const portrait = () => {
  return (
    <div className="portrait-container">
      <img className="portrait" src={Portrait} alt="Raido Kaasik" />
      {/* <img className="portrait-left" src={ImageLeft} alt="Raido Kaasik" />
      <img className="portrait-right" src={ImageRight} alt="Raido Kaasik" /> */}
    </div>
  );
};

export default portrait;
