import React from "react";
import { FeatureDetailInterface, featureDetails } from "src/types";

const FeatureDetails = () => {
  const details: featureDetails = [
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We always deliver on time.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We give you guides to protect and care for your plants.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "We always come over for a check-up after sale.",
    },
    {
      icon: (
        <box-icon color="darkgreen" name="check-square" type="solid"></box-icon>
      ),
      description: "100% money back guaranteed.",
    },
  ];
  return (
    <>
      {details.map((detail: FeatureDetailInterface) => {
        const { icon, description } = detail;
        return (
          <div className="flex py-2">
            <p>{icon}</p>
            <p className="text-darkgreen md:font-semibold ">{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default FeatureDetails;
