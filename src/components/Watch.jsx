import React from "react";
import tech1 from "../assets/tech1.png";
const TechSpc = () => {
  return (
    <section
      id="tech-spc"
      className="watch-effect watch-effect-new multi-function"
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally center content
        alignItems: "center", // Vertically center content
        height: "100vh", // Full viewport height for vertical centering
      }}
    >
      <div className="watch-content">
        <div
          className="watch-container"
          style={{ textAlign: "center", position: "relative" }}
        >
          {/* Image */}
          <img
            alt="watch-image"
            loading="lazy"
            width="269"
            height="482"
            decoding="async"
            className="watch-img w-16 md:w-32 lg:w-48 mx-auto"
            src={tech1}
            style={{ color: "transparent" }}
          />

          {/* Additional Content */}
          <div
            className="watch-data"
            style={{
              top: "229px",
              width: "462px",
              left: "calc(100% - 12px)",
              position: "absolute",
            }}
          >
            <div
              className="line-dote"
              style={{ top: "-17px", left: "-29px", color:"white" }}
            ></div>
            <div
              className="watch-line"
              style={{ width: "100%", top: "-13px", left: "-23px" ,  color:"white" }}
            ></div>
            <div
              className="watch-para"
              style={{
                opacity: 1,
                padding: "0px 20px 0px 143px",
                textAlign: "right",
                color:"white" 
              }}
            >
              <p>
                TOKK<sup>TM</sup> is designed for easy
                <br />
                interactions with a second
                <br />
                Multi-Function Button for added
                <br />
                convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="scroll-wrap">
        <li data-index="0"></li>
        <li data-index="1"></li>
        <li data-index="2"></li>
        <li data-index="3"></li>
      </ul>
    </section>
  );
};

export default TechSpc;
