import React, { useState, useEffect, useRef } from "react";

const NoticedSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set()); // Tracks visible sections
  const contentRefs = useRef([]); // Ref array for each inner-content

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleSections((prev) => new Set(prev).add(index)); // Add index to the Set
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Attach observer to each inner-content div
    contentRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <section className="noticed-section" id="overview">
      <div className="container mx-auto h-full">
        <div className="mx-auto max-w-[1100px] flex justify-center lg:content-center">
          <div className="w-2/5">
            <div className="sticky top-0 text-center sticky-img">
              <div className="sticky-content">
                <img
                  alt="Fixed Image"
                  loading="lazy"
                  width="1712"
                  height="2172"
                  decoding="async"
                  className="max-w-ex lg:max-w-sm mx-auto rounded-lg shadow-lg relative z-10"
                  src="https://tokk-ai-dev.bitcotapps.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb1.316baac6.png&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div
                  className="watch-circal1"
                  style={{ width: "0px", height: "0px" }}
                ></div>
                <div
                  className="watch-circal2"
                  style={{ width: "0px", height: "0px" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="noticed-content">
            {[
              `"Hey, I've noticed you've been sitting down for a while. How about we take a break and stretch for a few minutes?"`,
              `”Yes. That sounds good, where can I start today?"`,
              `”Let’s get you moving with a few quick stretches to loosen up. We‘ll focus on your neck, shoulders, back, and legs. How does that sound?”`,
              `“My left shoulder is a bit stiff today. Can we do something else?”`,
              `“Absolutely! We can focus on some gentle stretches and movements to help relieve that stiffness in your left shoulder without causing any discomfort. Here’s a sequence designed to ease into it...”`,
            ].map((text, index) => (
              <div
                key={index}
                ref={(el) => (contentRefs.current[index] = el)} // Attach ref to current element
                data-index={index} // Set unique index
                className="inner-content"
                style={{
                  opacity: visibleSections.has(index.toString()) ? 1 : 0,
                  transform: visibleSections.has(index.toString())
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 1s ease-out ${index * 0.3}s, transform 1s ease-out ${
                    index * 0.3
                  }s`, // Add staggered delay
                }}
              >
                <p
                  className={`${
                    index % 2 === 0
                      ? "text-red-600"
                      : "text-white text-right"
                  } content-section text-base md:text-4xl xl:text-subtitle-lg md:mt-6 font-medium show`}
                > 
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticedSection;
