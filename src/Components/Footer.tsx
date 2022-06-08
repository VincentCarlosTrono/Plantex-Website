import React from "react";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";

const Footer = () => {
  const footerInfos = [
    {
      title: "Our Address",
      info1: "123-Peru",
      info2: "La Libertad - 43210",
      info3: "123 - 456 - 789",
    },
    {
      title: "Contact Us",
      info1: "+999 888 777",
      icon1: <box-icon name="facebook" type="logo"></box-icon>,
      icon2: <box-icon name="instagram-alt" type="logo"></box-icon>,
      icon3: <box-icon name="twitter" type="logo"></box-icon>,
    },
  ];
  return (
    <div className="grid-container">
      <div className="col-start-2 cols-end-3">
        <div className="md:grid grid-cols-3 justify-between gap-2">
          <div>
            <div className="flex py-2">
              <box-icon color="green" name="leaf"></box-icon>
              <h2 className="font-semibold text-xl">PLANTEX</h2>
            </div>
            <h1 className="py-10 font-bold text-2xl max-w-xs">
              Subscribe to our news letter to stay update
            </h1>
            <div className="grid grid-cols-2 bg-lightgray py-5 px-4 rounded-xl ">
              <input
                className="bg-lightgray"
                type="text"
                placeholder="Enter your email"
              />
              <button className=" p-4 flex justify-center items-center bg-darkgreen rounded-xl text-white hover:pl-14">
                Subscribe
                <div className="rotate-45 ">
                  <box-icon color="white" name="up-arrow-alt"></box-icon>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {footerInfos.map((footerInfo: any) => {
              return (
                <div>
                  <div>
                    <h1 className="py-2 font-semibold ">{footerInfo.title}</h1>
                    <p className="py-2 text-gray-600">{footerInfo.info1}</p>
                    <div className="grid grid-rows-4 gap-2 text-gray-600">
                      <p>{footerInfo?.info2}</p>
                      <p>{footerInfo?.info3}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ">
                    <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                      {footerInfo?.icon1}
                    </p>
                    <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                      {footerInfo?.icon2}
                    </p>
                    <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                      {footerInfo?.icon3}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="font-semibold py-2">We accept all credit cards</h1>
            <div className="flex h-11 w-11 items-center gap-2">
              <img src={card1} alt="card1" />
              <img src={card2} alt="card2" />
              <img src={card3} alt="card3" />
              <img src={card4} alt="card4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
