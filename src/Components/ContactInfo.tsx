import React, { useContext } from "react";
import { DarkmodeContext } from "src/DarkmodeContext";
import { ContactInterface, Contacts } from "src/types";

const ContactInfo = () => {
  const { darkmode } = useContext(DarkmodeContext);
  const contacts: Contacts = [
    {
      detail: "Call us for instant support",
      icon: (
        <box-icon color={darkmode ? "white" : "black"} name="phone"></box-icon>
      ),
      number: "+999 888 777",
    },
    {
      detail: "Write us by email",
      icon: (
        <box-icon
          color={darkmode ? "white" : "black"}
          name="envelope"
        ></box-icon>
      ),
      number: "user@email.com",
    },
  ];
  return (
    <>
      {contacts.map((contact: ContactInterface) => {
        const { detail, icon, number } = contact;
        return (
          <div className="py-5 ">
            <p className="text-gray-500 font-semibold">{detail}</p>
            <div className="flex justify-start items-center py-2 ">
              <p className="flex items-center">{icon}</p>
              <p className="font-semibold dark:text-white">{number}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContactInfo;
