import React from "react";
import AboutDetails from "./AboutDetails";

const About = () => {
  return (
    <div className="grid-container py-10 md:p-36" id="about" data-aos="fade-up">
      <div className="col-start-2 col-end-3  text-center  bg-darkgreen rounded-lg py-14 px-2">
        <h1 className=" text-2xl px-10 md:text-4xl font-bold text-white md:px-56">
          Steps to start your plants off right
        </h1>
        <AboutDetails />
      </div>
    </div>
  );
};

export default About;
