import React from "react";
import "./About.css";
import Portrait from "../../img/portrait.jpg";

const about = () => {
  return (
    <div id="about">
      <h1 id="about-heading-lg">ABOUT ME</h1>
      <div className="about-container">
        <div className="about-break"></div>

        <h2 id="about-heading-sm">
          Hi! Let me introduce myself. My name is Raido Kaasik and i'm a
          designer and web-developer based in Estonia
        </h2>
        <div className="about-info">
          <img className="bio-portrait" src={Portrait} alt="Raido Kaasik" />
          <div className="bio">
            <h3>BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id
              corrupti ipsam, voluptates sed aut mollitia magni nulla
              repudiandae sapiente ex aliquam quibusdam similique vero
              recusandae consequatur minus iusto corporis!
            </p>
          </div>
          <div className="job job1">
            <h3>GAMELOFT</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div>
          <div className="job job2">
            <h3>Gameloft</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div>
          <div className="job job3">
            <h3>Gameloft</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
