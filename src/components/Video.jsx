import React from "react";

const OverviewSection = () => {
  return (
    <section
      id="overview"
      className="h-full md:h-screen hero-section relative transition-all ease-in-out duration-300 overflow-hidden rounded-none p-10 m-20 z-1"
    >
      <video
        src="https://d244vcuzwdrlwb.cloudfront.net/Inspriring%20Nature%20Woman%20(1).mp4"
        loop
        autoPlay
        preload="auto"
        className="rounded-b-lg"
        playsInline
        style={{ borderRadius: "20px" }}
      />
      <div
        className="video-heading absolute bottom-[20%] left-1/2 transform -translate-x-1/2"
        style={{ opacity: "-2.09645" }}
      >
        <h1 className="uppercase text-6xl md:text-7xl lg:text-title-lg font-bold text-center whitespace-nowrap poppins-bold">
          Tokk Ai
        </h1>
        <h6 className="text-xl md:text-subtitle-lg text-center mt-4 md:mt-6 font-medium">
          Your wearable, personal coach.
        </h6>
      </div>
    </section>
  );
};

export default OverviewSection;
