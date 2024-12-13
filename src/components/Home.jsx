import React, { useState, useEffect } from 'react';

const OverlappingSlides = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* First Slide (Fixed position) */}
      <div
        className="fixed top-0 left-0 h-screen w-full b-50%"
        style={{
          backgroundImage:
            'url("https://tokk-ai-dev.bitcotapps.com/_next/static/media/tokk-thumbnails1.f60f0350.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center', // Ensure the image is positioned on the left
          zIndex: 10,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <section className="h-full flex items-center justify-between px-8 text-white">
          {/* Left Side Content (Background image will occupy this part) */}
          <div className="flex-1">
            {/* Empty or optional content, background image will be here */}
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

      {/* Second Slide (absolute, overlapping first slide class="h-screen bg-tokk-thumbnails1 bg-50% lg:bg-auto  animation-fadeup") */}
      <div
        className="absolute top-0 left-0 h-screen w-full bg-50%"
        style={{
          backgroundImage:
            'url("https://tokk-ai-dev.bitcotapps.com/_next/static/media/tokk-thumbnails2.2cd67476.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center', // Ensure the image is positioned on the left
          zIndex: 20,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <section className="h-full flex items-center justify-between px-8 text-white">
          {/* Left Side Content (Background image will occupy this part) */}
          <div className="flex-1">
            {/* Empty or optional content, background image will be here */}
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

      {/* Spacer Divs for Scrollability */}
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default OverlappingSlides;
