import React from "react";
import ContactInfo from "./ContactInfo";
import MessageBox from "./MessageBox";

const Faqs = () => {
  return (
    <div className="grid-container md:py-28" id="faqs">
      <div className="col-start-2 col-end-3 ">
        <div className="md:flex justify-between items-center">
          <div data-aos="fade-right">
            <h1 className=" text-center md:text-left md:px-0 px-20 text-xl md:text-4xl font-semibold md:max-w-md py-10 dark:text-white">
              Reach out to us today via any of the given information
            </h1>
            <div className="flex md:block justify-evenly">
              <ContactInfo />
            </div>
          </div>

          <div className="p-16" data-aos="fade-left">
            <MessageBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
