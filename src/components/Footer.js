import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="p-3">
      <div className="d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="footer-sm">
            <h6>Powered by bread</h6>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-spotify"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <div className="footer-info">
            <h6>bread all right revesered</h6>
            <div className="d-flex">
              <p>privacy</p>
              <p>terms</p>
              <p>about</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column d-lg-none ">
        <div className="footer-sm mx-auto">
          <h6 className="text-center">Powered by bread</h6>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-spotify"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="footer-info d-flex justify-content-between mt-4">
          <h6>bread all right revesered</h6>
          <div className="d-flex">
            <p className="ml-1">privacy</p>
            <p className="ml-1">terms</p>
            <p className="m-0">about</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
