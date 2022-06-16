import React, { useContext } from "react";
import { DarkmodeContext } from "src/DarkmodeContext";
import { FooterInfoInterface, footerInformation } from "src/types";

const FooterInfo = () => {
  const { darkmode } = useContext(DarkmodeContext);

  const footerInfos: footerInformation = [
    {
      title: "Our Address",
      info1: "123-Peru",
      info2: "La Libertad - 43210",
      info3: "123 - 456 - 789",
    },
    {
      title: "Contact Us",
      info1: "+999 888 777",
      icon1: (
        <box-icon
          color={darkmode ? "white" : "black"}
          name="facebook"
          type="logo"
        ></box-icon>
      ),
      icon2: (
        <box-icon
          color={darkmode ? "white" : "black"}
          name="instagram-alt"
          type="logo"
        ></box-icon>
      ),
      icon3: (
        <box-icon
          color={darkmode ? "white" : "black"}
          name="twitter"
          type="logo"
        ></box-icon>
      ),
    },
  ];
  return (
    <>
      {footerInfos.map((footerInfo: FooterInfoInterface) => {
        return (
          <div>
            <div>
              <h1 className="py-2 font-semibold dark:text-white ">
                {footerInfo.title}
              </h1>
              <p className="py-2 text-gray-500">{footerInfo.info1}</p>
              <div className="grid grid-rows-4 gap-2 text-gray-500">
                <p>{footerInfo?.info2}</p>
                <p>{footerInfo?.info3}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                {footerInfo?.icon1}
              </p>
              <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                {footerInfo?.icon2}
              </p>
              <p className="hover:cursor-pointer opacity-50 hover:opacity-100 hover:-translate-y-2">
                {footerInfo?.icon3}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FooterInfo;
