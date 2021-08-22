import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between p-2">
      <div>
        <p className="logo ">bre.ad/jane</p>
      </div>
      <div className="nav-section d-lg-flex d-none justify-content-end">
        <p className="">Offering</p>
        <p className="">Other Links</p>
        <p className="">Testimonials</p>
        <p className="">Portfolio</p>
        <p className="">Contact me</p>
        <p className="book-trial-nav ">
          <nobr>Book Trial</nobr>
        </p>
      </div>
      <div className="d-lg-none ">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default NavBar;
