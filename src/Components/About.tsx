import React from "react";

const About = () => {
  const aboutDetails = [
    {
      number: "01",
      title: "Choose plant",
      description: "We have several varieties plants you can choose from.",
    },
    {
      number: "02",
      title: "Place an order ",
      description:
        "Once your order is set, we move to the next step which is the shipping.",
    },
    {
      number: "03",
      title: "Get plants delivered",
      description:
        "Our delivery process is easy, you receive the plant direct to your door.",
    },
  ];

  return (
    <div className="grid-container py-10 md:p-36">
      <div className="col-start-2 col-end-3  text-center  bg-darkgreen rounded-lg py-14 px-2">
        <h1 className=" text-2xl px-10 md:text-4xl font-bold text-white md:px-56">
          Steps to start your plants off right
        </h1>
        <div className="md:flex justify-center text-left md:gap-10 p-10">
          {aboutDetails.map((aboutDetail: any) => {
            const { number, title, description } = aboutDetail;
            return (
              <div className="py-5">
                <div className="bg-white rounded-lg p-5  md:p-15  hover:-translate-y-2 hover:cursor-pointer ">
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
      </div>
    </div>
  );
};

export default About;
