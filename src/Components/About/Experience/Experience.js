import React from "react";
import "./Experience.css";
import Card from "../Card/Card.js";

const experience = () => {
  return (
    <div className="experience-container">
      <Card
        title="GAMELOFT"
        position="Graphics artist"
        date="Apr 2013  - Oct 2015 "
        description="Responsible for creating artwork for new game assets, which mainly consisted of characters, creatures, props and environments."
      />
      <Card
        title="FOXIUM"
        position="Graphics artist"
        date="Nov 2015  - Mar 2017 "
        description="Responsible for creating fully rendered game assets, which consisted of backgrounds, symbols and UI elements."
      />
      <Card
        title="GAMELOFT"
        position="Graphics artist"
        date="Sep 2017  - Present"
        description="Responsible for setting up visual style for mobile games, creating concept-art pipeline for it and feedback junior artists."
      />
    </div>
  );
};

export default experience;
