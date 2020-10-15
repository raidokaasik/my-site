import React from "react";
import Thumbnail from "../Components/Thumbnail";
import image_chinese from "../chinese.jpg";
const works = () => {
  return (
    <div>
      <div className="catalogue">
        <h1>Works</h1>

        <h1>Projects</h1>
        <Thumbnail
          link="/project2"
          image={image_chinese}
          title="Chinese"
          description="An Illustration"
        />
        <Thumbnail
          link="/project1"
          image="../public/images/beetle.jpg"
          title="Forum poject"
          description="A community site made with MERN stack"
        />
        <Thumbnail
          link="/project1"
          image="../public/images/beetle.jpg"
          title="Forum poject"
          description="A community site made with MERN stack"
        />
        <Thumbnail
          link="/project1"
          image="../public/images/beetle.jpg"
          title="Forum poject"
          description="A community site made with MERN stack"
        />
        <Thumbnail
          link="/project1"
          image="../public/images/beetle.jpg"
          title="Forum poject"
          description="A community site made with MERN stack"
        />
        <Thumbnail
          link="/project1"
          image="../public/images/beetle.jpg"
          title="Forum poject"
          description="A community site made with MERN stack"
        />
      </div>
    </div>
  );
};

export default works;
