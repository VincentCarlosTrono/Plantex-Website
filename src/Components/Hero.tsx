import React from "react";
import Home from "../img/home.png";

const Hero = () => {
  return (
    <div className="grid-container " data-aos="fade-down">
      <div className="col-start-2 col-end-3 md:flex justify-center items-center pt-8 md:pt-40 pb-0 md:pb-56">
        <div className="grid grid-cols-2 justify-end  items-center">
          <div className="justify-evenly flex">
            <img
              className="md:w-2/5 w-56 h-60 md:hidden "
              src={Home}
              alt="homeImage"
            />
          </div>
          <div className="flex justify-end">
            <div className="block md:hidden">
              <div className="rotate-90 px-5 py-10 text-darkgreen">
                Follow us
              </div>
              <div>
                <h1
                  className="text-darkgreen font-light
             text-6xl flex justify-center "
                >
                  |
                </h1>
              </div>

              <div>
                <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
                  <box-icon
                    color="darkgreen"
                    name="facebook"
                    type="logo"
                  ></box-icon>
                </div>
                <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
                  <box-icon
                    color="darkgreen"
                    name="instagram"
                    type="logo"
                  ></box-icon>
                </div>
                <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
                  <box-icon
                    color="darkgreen"
                    name="twitter"
                    type="logo"
                  ></box-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl md:text-6xl font-semibold py-5 md:py-10 max-w-lg dark:text-white">
            Plants will make your life better
          </h1>
          <p className="max-w-sm text-gray-400">
            Create incredible plant design for your offices or apastaments. Add
            freshness to your new ideas.
          </p>
          <div className="py-5 md:py-10 ">
            <button className=" py-4 px-8 bg-darkgreen text-white items-center pl-3 rounded-xl">
              <div className=" hover:px-3 flex">
                Explore
                <div className="-rotate-45 hover:px-3">
                  <box-icon color="white" name="down-arrow-alt"></box-icon>
                </div>
              </div>
            </button>
          </div>
        </div>
        <img className="w-2/5 md:block hidden " src={Home} alt="homeImage" />

        <div className="md:block hidden">
          <div className="rotate-90 px-5 py-10 text-darkgreen">Follow us</div>
          <div>
            <h1
              className="text-darkgreen font-light
             text-6xl flex justify-center "
            >
              |
            </h1>
          </div>

          <div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="facebook" type="logo"></box-icon>
            </div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="instagram" type="logo"></box-icon>
            </div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="twitter" type="logo"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
