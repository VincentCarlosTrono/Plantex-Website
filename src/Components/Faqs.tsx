import React, { useContext } from "react";
import { DarkmodeContext } from "src/DarkmodeContext";

const Faqs = () => {
  const { darkmode } = useContext(DarkmodeContext);
  const contacts = [
    {
      detail: "Call us for instant support",
      icon: (
        <box-icon color={darkmode ? "white" : "black"} name="phone"></box-icon>
      ),
      number: "+999 888 777",
    },
    {
      detail: "Write us by email",
      icon: (
        <box-icon
          color={darkmode ? "white" : "black"}
          name="envelope"
        ></box-icon>
      ),
      number: "user@email.com",
    },
  ];

  return (
    <div className="grid-container md:py-28" id="faqs">
      <div className="col-start-2 col-end-3 ">
        <div className="md:flex justify-between items-center">
          <div data-aos="fade-right">
            <h1 className=" text-center md:text-left md:px-0 px-20 text-xl md:text-4xl font-semibold md:max-w-md py-10 dark:text-white">
              Reach out to us today via any of the given information
            </h1>
            <div className="flex md:block justify-evenly">
              {contacts.map((contact: any) => {
                const { detail, icon, number } = contact;
                return (
                  <div className="py-5 ">
                    <p className="text-gray-500 font-semibold">{detail}</p>
                    <div className="flex justify-start items-center py-2 ">
                      <p className="flex items-center">{icon}</p>
                      <p className="font-semibold dark:text-white">{number}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-16" data-aos="fade-left">
            <div>
              <input
                className="border-b-2 w-full py-5 md:py-10 md:text-xl dark:bg-darkmodeGreen"
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                className="border-b-2 w-full py-5 dark:bg-darkmodeGreen  md:py-10 text-xl"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="pb-5">
              <input
                className="border-b-2 w-full py-10 md:py-20  dark:bg-darkmodeGreen
                text-xl"
                type="text"
                placeholder="Message"
              />
            </div>
            <div className="">
              <button className="py-1 md:py-3 px-4 md:px-8 flex justify-center items-center bg-darkgreen rounded-xl text-white hover:pl-14">
                Send Message
                <div className="rotate-45 ">
                  <box-icon color="white" name="up-arrow-alt"></box-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
