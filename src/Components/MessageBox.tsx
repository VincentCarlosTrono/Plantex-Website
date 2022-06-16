import React from "react";

const MessageBox = () => {
  return (
    <>
      <div>
        <input
          className="border-b-2 w-full py-5 md:py-10 md:text-xl dark:bg-darkmodeGreen"
          type="text"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          className="border-b-2 w-full py-5 dark:bg-darkmodeGreen  md:py-10 text-xl"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="pb-5">
        <input
          className="border-b-2 w-full py-10 md:py-20  dark:bg-darkmodeGreen
      text-xl"
          type="text"
          placeholder="Message"
        />
      </div>
      <div className="">
        <button className="py-1 md:py-3 px-4 md:px-8 flex justify-center items-center bg-darkgreen rounded-xl text-white hover:pl-14">
          Send Message
          <div className="rotate-45 ">
            <box-icon color="white" name="up-arrow-alt"></box-icon>
          </div>
        </button>
      </div>
    </>
  );
};

export default MessageBox;
