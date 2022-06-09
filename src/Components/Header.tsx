import React, { useState, useEffect, useContext } from "react";
import { DarkmodeContext } from "src/DarkmodeContext";

const Header = () => {
  const navLists = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "FAQs",
      link: "#faqs",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
  ];

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
        <div className="flex justify-center items-center gap-10">
          <div className="md:flex justify-evenly gap-16 hidden ">
            {navLists.map((navList: any) => {
              const { name, link } = navList;
              return (
                <div>
                  <ul className="">
                    <a href={link}>
                      {" "}
                      <li className=" hover:border-b-2 hover:-translate-y-2 hover:border-darkgreen hover:cursor-pointer font-semibold">
                        {name}
                      </li>
                    </a>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            <div className="">
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
          </div>

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
                {navLists.map((navLists) => {
                  const { name, link } = navLists;
                  return (
                    <div className="text-left">
                      <ul>
                        <a href={link}>
                          <li className="pr-44 pl-10 py-12 dark:text-white bg-white  dark:bg-darkmodeGreen ">
                            {name}
                          </li>
                        </a>
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
