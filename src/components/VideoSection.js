import React from "react";
import "./videoSection.css";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";
const VideoSection = () => {
  const data = [
    {
      img: pic1,
      type: "online class",
      time: "mon 1:00pm-2:00px",
    },
    {
      img: pic2,
      type: "online class",
      time: "mon 1:00pm-2:00px",
    },
    {
      img: pic3,
      type: "online class",
      time: "mon 1:00pm-2:00px",
    },
    {
      img: pic4,
      type: "online class",
      time: "mon 1:00pm-2:00px",
    },
  ];
  return (
    <div className="video-section-outer p-3">
      <div className="video-section-container py-4">
        <h2 className="header-text">Browse All my offerings</h2>
        <div className="d-flex scroll-section justify-content-around overflow-auto p-4">
          {data.map((item, index) => {
            return (
              <div className="img-container mx-2">
                <img height={250} width={300} src={item.img} alt="" />
                <div className="info p-3">
                  <p className="live px-2">Live</p>
                  <p className="mt-2">{item.type}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <span className="left mx-3">
            <i className="fa fa-arrow-left"></i>
          </span>
          <span className="right">
            <i className="fa fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
