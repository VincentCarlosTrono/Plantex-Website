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

  return (
    <div
      className={`grid-container sticky top-0 z-10 w-full bg-white ${
        scroll && "shadow-lg dark:shadow-black ease-in duration-500"
      }`}
    >
      <div className="col-start-2 col-end-3 flex justify-between p-10  ">
        <div className="flex">
          <box-icon color="green" name="leaf"></box-icon>
          <h1 className="">PLANTEX</h1>
        </div>
        <div className="flex justify-evenly gap-16">
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
          <box-icon name="moon"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Header;
