import React from "react";
import InstructorInfo from "./InstructorInfo";
import InstructorSM from "./InstructiorSM";
import SubscribeBox from "./SubscribeBox";
import "./infoCard.css";
const CardSection = () => {
  return (
    <div className="card-container p-2 mx-2 mx-lg-auto">
      <div className="d-flex flex-column bg-light">
        <InstructorInfo />
        <InstructorSM />
        <SubscribeBox />
      </div>
    </div>
  );
};
export default CardSection;
