import React from "react";
import FeatureDetails from "./FeatureDetails";
import About from "../img/about.png";

const Feature = () => {
  return (
    <div className="grid-container">
      <div className="col-start-2 cols-end-3 md:flex justify-center items-center py-12 md:py-24 gap-10 ">
        <div data-aos="fade-right">
          <img className="p-10" src={About} alt="aboutImg" />
        </div>

        <div data-aos="fade-left">
          <h1 className="font-semibold text-3xl md:text-5xl max-w-lg py-5 dark:text-white">
            Who we really are & why choose us
          </h1>
          <p className="py-2 md:py-5 text-gray-500 max-w-lg text-sm md:text-lg md:max-w-sm">
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time.
          </p>
          <FeatureDetails />
          <button className="flex justify-center items-center py-3 md:p-7 text-darkgreen font-semibold ">
            Shop now
            <div className="-rotate-45 p-2 hover:px-3">
              <box-icon color="green" name="down-arrow-alt"></box-icon>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
