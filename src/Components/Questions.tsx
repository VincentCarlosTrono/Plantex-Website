import React, { useState } from "react";
import { InfoInterface } from "src/types";

const Questions = () => {
  const [infos, setInfo] = useState([
    {
      itemNumber: 1,
      question: "My flowes are falling off or dying?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
    {
      itemNumber: 2,
      question: "What causes leaves to become pale?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
    {
      itemNumber: 3,
      question: "What causes brown crispy leaves?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
    {
      itemNumber: 4,
      question: "How do i choose a plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
    {
      itemNumber: 5,
      question: "How do i change the pots?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
    {
      itemNumber: 6,
      question: "Why are gnats flying around my plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. choosing the right plant.",
      isOpen: false,
    },
  ]);

  const toggleInfo = (info: InfoInterface) => {
    const { question, answer, isOpen, itemNumber } = info;
    setInfo((prevValue) => {
      const filteredList = prevValue.filter(
        (info) => info.itemNumber !== itemNumber
      );
      filteredList.push({
        question,
        answer,
        isOpen: !isOpen,
        itemNumber,
      });
      const newList = filteredList.sort((a, b) => a.itemNumber - b.itemNumber);

      return newList;
    });
  };
  return (
    <div
      className="grid-container bg-lightgreen dark:bg-darkmodeLightGreen md:p-20 py-10"
      data-aos="fade-up"
    >
      <div className="col-start-2 cols-end-3 ">
        <h1 className="md:text-5xl text-2xl font-semibold md:text-left text-center md:max-w-2xl py-10 dark:text-white">
          Some common questions were often asks
        </h1>

        <div className="grid md:grid-cols-2 gap-5">
          {infos.map((info: InfoInterface, index) => {
            const { question, answer, isOpen } = info;

            return (
              <div>
                {isOpen ? (
                  <div
                    className="bg-darkgreen dark:bg-darkmodeDarkGreen py-5 px-5 md:px-10 font-bold  items-start md:gap-10 text-white "
                    onClick={() => toggleInfo(info)}
                  >
                    <div className="dark:text-white ">
                      <button className="md:px-8 text-md  md:gap-10">
                        <div className="flex justify-start items-center">
                          <p className="md:p-5 pr-4 ">x</p>
                          <h1 className=" text-sm md:text-lg font-semibold py-2">
                            {question}
                          </h1>
                        </div>

                        <div className="text-left md:pl-12 pl-6 text-sm">
                          <p>{answer}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="md:px-10  items-start md:gap-10 bg-white dark:bg-darkmodeDarkGreen"
                    onClick={() => toggleInfo(info)}
                  >
                    <button className="px-8 text-md flex justify-center items-center md:gap-10">
                      <p className="md:p-5 pr-4 dark:text-white">+</p>
                      <h1 className="py-5 text-sm md:text-lg dark:text-white">
                        {question}
                      </h1>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
