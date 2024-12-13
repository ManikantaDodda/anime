import React, { useState, useEffect } from "react";
import backgrp from "../assets/back.png";

const OverlappingSlides = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    <div className="relative overflow-hidden" style={{ height: "200vh"}}>
      {/* First Slide */}
      <div
        className="sticky top-20 h-screen w-full"
        style={{
          // backgroundImage: `url(${backgrp})`,
          // backgroundSize: "cover",
          // backgroundPosition: "left",
          zIndex: 1,
        }}
      >
        <section className="h-full flex items-center justify-between px-8 text-white">
          {/* Left Side Content */}
          <div className="flex-1">
            {/* Background image occupies this space */}
            <img src={backgrp} alt="background" />

          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-left">
            <h6 className="text-4xl font-medium">
              <span>Most people aren't moving enough.</span>
              <br />
              75% of American adults fail to meet the CDC guidelines for physical activity.
            </h6>
          </div>
        </section>
      </div>

      {/* Second Slide */}
      <div
        className="absolute top-0 left-0 h-screen w-full"
        style={{
          // backgroundImage: `url(${backgrp})`,
          // backgroundSize: "cover",
          // backgroundPosition: "left center",
          zIndex: 2,
          transform: `translateY(${Math.min(100, scrollY / 5)}%)`, // Overlap effect
          opacity: Math.min(1, scrollY / 300), // Fade in as user scrolls
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <section className="h-full flex items-center justify-between px-8 text-white">
          {/* Left Side Content */}
          <div className="flex-1">
            {/* Background image occupies this space */}
            <img src={backgrp} alt="background" />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-left">
            <h6 className="text-4xl font-medium">
              <span>A little can go a long way.</span>
              <br />
              Being active for just 30 minutes a day is clinically proven to greatly improve a range
              of health conditions. TOKK AI is designed to help you get started and continue moving.
            </h6>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
};

export default OverlappingSlides;
