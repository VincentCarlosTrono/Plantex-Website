import React, { useState, useEffect, useContext } from "react";
import MenuMobile from "./MenuMobile";
import Navigation from "./Navigation";
import { DarkmodeContext } from "src/DarkmodeContext";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`grid-container sticky top-0 z-10 w-full dark:bg-darkmodeGreen bg-white ${
        scroll && "shadow-lg dark:shadow-black ease-in duration-500"
      }`}
    >
      <div className="col-start-2 col-end-3 flex items-center justify-between dark:text-white  p-2 md:p-4  ">
        <div className="flex">
          <box-icon color="green" name="leaf"></box-icon>
          <h1 className="hover:text-green-600 hover:cursor-pointer font-semibold">
            PLANTEX
          </h1>
        </div>
        <div className="flex gap-10 items-center">
          <Navigation />

          <div className="flex gap-2">
            <button
              className="p-3"
              onClick={() => {
                setDarkmode(!darkmode);
              }}
            >
              {darkmode ? (
                <box-icon color="white" name="sun"></box-icon>
              ) : (
                <box-icon name="moon"></box-icon>
              )}
            </button>
          </div>

          <div>
            <button
              className="md:hidden block "
              onClick={() => {
                setOpen(!open);
              }}
            >
              <box-icon
                color={darkmode ? "white" : "black"}
                name="menu"
              ></box-icon>
            </button>
            <div>
              {open && (
                <div className="md:hidden block absolute right-0 top-16 ">
                  <button
                    className="absolute right-10 top-4 px-5 py-3 text-darkgreen dark:text-white"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    X
                  </button>
                  <MenuMobile />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
