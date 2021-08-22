import React from "react";
import "./infoCard.css";
const SubscribeBox = () => {
  return (
    <div className="p-3">
      <div className="subscribr-box p-3">
        <p>Subscribe to my profile and never miss a update from me.</p>
        <input type="text" placeholder="enter the email" />
        <span className="book-trial mx-2">Subscribe</span>
      </div>
    </div>
  );
};
export default SubscribeBox;
