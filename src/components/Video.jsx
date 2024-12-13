import React, { useState, useEffect } from "react";

const OverviewSection = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <section
      id="overview"
      className="h-full md:h-screen relative transition-all ease-in-out duration-300 rounded-none"
      style={{
        zIndex: 1,
        position: "relative",
        margin: scrolled ? "30px" : "0px", 
        transition: "margin 0.3s ease",
      }}
    >
      {/* Video Background */}
      <video
        src="https://d244vcuzwdrlwb.cloudfront.net/Inspriring%20Nature%20Woman%20(1).mp4"
        loop
        autoPlay
        muted
        preload="auto"
        playsInline
        style={{
          borderRadius: "20px",
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay Heading */}
      <div
        className="video-heading absolute bottom-[20%] left-1/2 transform -translate-x-1/2"
        style={{
          opacity: 1,
          zIndex: 2,
        }}
      >
        <h1
          className="uppercase text-6xl md:text-7xl lg:text-title-lg font-bold text-center whitespace-nowrap poppins-bold"
          style={{ color: "white" }}
        >
          Tokk Ai
        </h1>
        <h6
          className="text-xl md:text-subtitle-lg text-center mt-4 md:mt-6 font-medium"
          style={{ color: "white" }}
        >
          Your wearable, personal coach.
        </h6>
      </div>
    </section>
    <section id="overview" className="h-screen animation-fadeup">
      <div className="container mx-auto h-full">
        <div
          className="h-full flex flex-col justify-center ml-3 lg:ml-[112px] xl:ml-[224px] mr-3 max-w-[1000px]"
          style={{ opacity: 0.955483 }}
        >
          <h1
            id="overview"
            className="capitalize text-5xl md:text-7xl xl:text-title-lg font-bold text-left text-white mb-10 fw-800"
          >
            Smarter,<br /> Better Lifestyle.
          </h1>
          <h6
            style={{color:"white"}}
            className="text-base md:text-4xl xl:text-subtitle-lg text-left md:mt-6 text-dimcolor font-medium"
          >
            TOKK AI is the wearable AI fitness and wellness coach that will help you
            develop and maintain healthy habits regardless of where you are in your
            fitness journey.
          </h6>
        </div>
      </div>
    </section>
    </>
  );
};

export default OverviewSection;
