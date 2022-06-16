import React from "react";
import { NavigationInterface, NavLists } from "src/types";

const Navigation = () => {
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
  return (
    <div className="md:flex justify-evenly gap-16 hidden ">
      {navLists.map((navList: NavigationInterface) => {
        const { name, link } = navList;
        return (
          <div>
            <ul>
              <a href={link}>
                <li className=" hover:border-b-2 hover:-translate-y-2 hover:border-darkgreen hover:cursor-pointer font-semibold">
                  {name}
                </li>
              </a>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
