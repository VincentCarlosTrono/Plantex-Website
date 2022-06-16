import React from "react";
import FooterCards from "./FooterCards";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div className="grid-container" id="contact" data-aos="fade-up">
      <div className="col-start-2 cols-end-3">
        <div className="md:grid grid-cols-3 justify-between gap-2 md:py-20">
          <div>
            <div className="flex py-2">
              <box-icon color="green" name="leaf"></box-icon>
              <h2 className="font-semibold text-xl dark:text-white">PLANTEX</h2>
            </div>
            <h1 className="py-10 font-bold text-2xl max-w-xs dark:text-white">
              Subscribe to our news letter to stay update
            </h1>
            <div className="grid grid-cols-2 dark:bg-darkmodeDarkGreen bg-lightgray py-5 px-4 rounded-xl ">
              <input
                className="bg-lightgray dark:bg-darkmodeDarkGreen"
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
            <FooterInfo />
          </div>
          <div>
            <FooterCards />
          </div>
        </div>
        <div className="flex items-center justify-center text-gray-500 pb-5 pt-20">
          <box-icon color="gray" name="copyright"></box-icon>
          <p>Vince. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
