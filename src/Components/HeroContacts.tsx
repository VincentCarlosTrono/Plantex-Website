import React from "react";
import Home from "../img/home.png";

const HeroContacts = () => {
  return (
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

export default HeroContacts;
