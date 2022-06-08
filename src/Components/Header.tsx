import React, { useState, useEffect } from "react";

const Header = () => {
  const navLists = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Products",
    },
    {
      name: "FAQs",
    },
    {
      name: "Contact Us",
    },
  ];

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div
      className={`grid-container sticky top-0 z-10 w-full bg-white ${
        scroll && "shadow-lg dark:shadow-black ease-in duration-500"
      }`}
    >
      <div className="col-start-2 col-end-3 flex justify-between p-5 md:p-10  ">
        <div className="flex">
          <box-icon color="green" name="leaf"></box-icon>
          <h1 className="">PLANTEX</h1>
        </div>
        <div className="md:flex justify-evenly gap-16 hidden ">
          {navLists.map((navList: any) => {
            const { name } = navList;
            return (
              <div>
                <ul>
                  <li>{name}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2">
          <div className="">
            <box-icon name="moon"></box-icon>
          </div>

          <button
            className="md:hidden block"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <box-icon name="menu"></box-icon>
          </button>

          {open && (
            <div className="md:hidden block absolute right-0 top-28 ">
              {navLists.map((navLists) => {
                const { name } = navLists;
                return (
                  <div className="text-left">
                    <ul>
                      <li className="pr-44 pl-10 py-9 bg-white ">{name}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
