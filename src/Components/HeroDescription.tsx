import React from "react";

const HeroDescription = () => {
  return (
    <>
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
    </>
  );
};

export default HeroDescription;
