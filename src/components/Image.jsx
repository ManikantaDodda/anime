import React, { useState, useEffect, useRef } from "react";
import techlo from "../assets/tech2.png";
const NoticedSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set()); // Tracks visible sections
  const [activeSection, setActiveSection] = useState(null); // Tracks currently visible section
  const contentRefs = useRef([]); // Ref array for each inner-content

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleSections((prev) => new Set(prev).add(index)); // Add index to Set
            setActiveSection(index); // Set current active section
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    contentRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <section className="noticed-section" id="overview">
      <div className="container mx-auto h-full">
        <div className="mx-auto max-w-[1100px] flex justify-center lg:content-center">
          {/* Image Section */}
          <div className="w-2/5">
            <div
              className={`sticky top-0 text-center sticky-img transition-all duration-500 ease-in-out ${
                activeSection % 2 === 0 ? "" : ""
              }`} // Change background conditionally
            >
              <div className="sticky-content">
                <img
                  alt="Fixed Image"
                  loading="lazy"
                  width="1712"
                  height="2172"
                  decoding="async"
                  className="max-w-ex lg:max-w-sm mx-auto rounded-lg shadow-lg relative z-10"
                  src={techlo}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
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
                ref={(el) => (contentRefs.current[index] = el)}
                data-index={index}
                className="inner-content"
                style={{
                  marginTop: "300px",
                  marginBottom: "300px",
                  opacity: visibleSections.has(index) ? 1 : 0,
                  transform: visibleSections.has(index)
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 1s ease-out, transform 1s ease-out`,
                }}
              >
                <p
                  className={`${
                    index % 2 === 0
                      ? "text-red-600"
                      : "text-white text-right"
                  } content-section text-base md:text-4xl xl:text-subtitle-lg md:mt-6 font-medium`}
                style={{width:"550px"}}>
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
