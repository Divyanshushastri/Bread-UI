import React from "react";
import "./infoCard.css";
const InstructorSM = () => {
  return (
    <div className="p-3">
      <div className="instructor-sm ">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-spotify"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <hr />
      <div>
        <span className="d-flex">
          <p className="head">
            <i className="fas fa-map-marker-alt icon"></i> Lives in
          </p>
          <p className="capsule">New Delhi</p>
        </span>
        <span className="d-flex">
          <p className="head">
            <i class="fal fa-comments-alt icon mx-1"></i>Speaks
          </p>
          <p className="capsule">hindi</p>
          <p className="capsule">english</p>
          <p className="capsule">tamil</p>
        </span>
      </div>
      <div className="d-flex flex-column flex-lg-row mt-3">
        <div>
          <h5>Checkout my video 30 minutes for beginners</h5>
          <p className="contact-me-btn">
            contact me <i className="fa fa-arrow-right"></i>
          </p>
        </div>

        <iframe
          width="290"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};
export default InstructorSM;
