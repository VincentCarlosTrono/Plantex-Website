import React from "react";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";

const FooterCards = () => {
  return (
    <>
      <h1 className="font-semibold py-2 dark:text-white">
        We accept all credit cards
      </h1>
      <div className="flex h-11 w-11 items-center gap-2">
        <img src={card1} alt="card1" />
        <img src={card2} alt="card2" />
        <img src={card3} alt="card3" />
        <img src={card4} alt="card4" />
      </div>
    </>
  );
};

export default FooterCards;
