import React from "react";
import "./dottedLineSection.css";
const DottedLineSection = () => {
  return (
    <div>
      <div className="dotted-line-container d-none d-lg-block"></div>
      <div className="dotted-container-in-mobile-mode d-lg-none d-block"></div>
    </div>
  );
};
export default DottedLineSection;
