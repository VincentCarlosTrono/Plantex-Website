import React from "react";
import About from "../img/about.png";

const Feature = () => {
  const details = [
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We always deliver on time.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We give you guides to protect and care for your plants.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We always come over for a check-up after sale.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "100% money back guaranteed.",
    },
  ];
  return (
    <div className="grid-container">
      <div className="col-start-2 cols-end-3 md:flex justify-center items-center py-12 md:py-24 gap-10">
        <div>
          <img className="p-10" src={About} alt="aboutImg" />
        </div>

        <div>
          <h1 className="font-semibold text-3xl md:text-5xl max-w-lg py-5">
            Who we really are & why choose us
          </h1>
          <p className="py-2 md:py-5 text-gray-600 max-w-lg text-sm md:text-lg md:max-w-sm">
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time.
          </p>
          {details.map((detail: any) => {
            const { icon, description } = detail;
            return (
              <div className="flex py-2">
                <p>{icon}</p>
                <p className="text-darkgreen md:font-semibold ">
                  {description}
                </p>
              </div>
            );
          })}
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
