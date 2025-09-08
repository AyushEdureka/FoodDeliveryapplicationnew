import React from "react";

const Banner = () => {
  return (
    <div className="position-relative">
      {/* Video BG */}
      <video
        autoPlay
        muted
        loop
        style={{ width: "100%",  objectFit: "cover" }}
      >
        <source
          src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Heading over video */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <h1 className="fw-bold" style={{fontSize:' clamp(1.2rem,2.5vw,2rem) '     ,textAlign:'center' , padding:'0 10px'}}>Declious Food Delivered -🐼</h1>
        <p className="fs-3">Fast • Fresh • Affordable</p>
      </div>
    </div>
  );
};

export default Banner;
