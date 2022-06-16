import React from "react";
import { AboutDetail, Details } from "src/types";

const AboutDetails = () => {
  const aboutDetails: Details = [
    {
      number: "01",
      title: "Choose plant",
      description: "We have several varieties plants you can choose from.",
      duration: "1000",
    },
    {
      number: "02",
      title: "Place an order ",
      description:
        "Once your order is set, we move to the next step which is the shipping.",
      duration: "2000",
    },
    {
      number: "03",
      title: "Get plants delivered",
      description:
        "Our delivery process is easy, you receive the plant direct to your door.",
      duration: "3000",
    },
  ];
  return (
    <div className="md:flex justify-center text-left md:gap-10 p-10">
      {aboutDetails.map((aboutDetail: AboutDetail) => {
        const { number, title, description, duration } = aboutDetail;
        return (
          <div className="py-5">
            <div
              className="bg-white rounded-lg p-5  md:p-15  hover:-translate-y-2 hover:cursor-pointer"
              data-aos="flip-right"
              data-aos-duration={duration}
            >
              <div className="bg-darkgreen grid justify-center items-center w-14 h-14 rounded-lg">
                <h1 className="text-white ">{number}</h1>
              </div>

              <h2 className="py-3 font-semibold ">{title}</h2>
              <p className="text-gray-600 max-w-xs">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutDetails;
