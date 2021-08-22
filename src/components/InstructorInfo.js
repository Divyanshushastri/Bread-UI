import React from "react";
import "./infoCard.css";
import instuctorpic from "./assets/instuctorpic.jpeg";
const InstructorInfo = () => {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between flex-column flex-lg-row">
        <div className="d-flex ">
          <img className="instructor-pic" src={instuctorpic} alt="" />
          <div className="atr-box mx-4">
            <p>yoga</p>
            <p>yoga</p>
            <p>yoga</p>
          </div>
        </div>
        <div className="d-flex flex-column mt-3  mt-lg-0">
          <span className="book-trial px-3 mb-2">
            <nobr>Book trial</nobr>{" "}
          </span>
          <span className="contact-me px-3">
            <nobr>Conatct me</nobr>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h2>Jane Doe</h2>
        <p className="instructor-desc">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
      </div>
    </div>
  );
};
export default InstructorInfo;
