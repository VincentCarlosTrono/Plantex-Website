import React from "react";
import { NavLists } from "src/types";

const navLists: NavLists = [
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

const MenuMobile = () => {
  return (
    <>
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
    </>
  );
};

export default MenuMobile;
