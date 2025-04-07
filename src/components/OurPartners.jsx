import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import hellosign from "../assets/hellosign.png";
import ignition from "../assets/ignition.png";
import karbon from "../assets/karbon.png";
import ownr from "../assets/ownr.png";
import quickbooks from "../assets/quickbooks.png";

const logos = [
  { id: 1, src: hellosign, link: "#" },
  { id: 2, src: ignition, link: "#" },
  { id: 3, src: karbon, link: "#" },
  { id: 4, src: ownr, link: "#" },
  { id: 5, src: quickbooks, link: "#" },
  { id: 6, src: hellosign, link: "#" },
  { id: 7, src: ignition, link: "#" },
  { id: 8, src: karbon, link: "#" },
  { id: 9, src: ownr, link: "#" },
  { id: 10, src: quickbooks, link: "#" },
];

function OurPartners() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0); // Store last position

  useEffect(() => {
    startAnimation(); // Start when component mounts
  }, []);

  const startAnimation = () => {
    controls.start({
      x: [offsetX, "-100%"], // Start from last position
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });
  };

  const pauseAnimation = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setOffsetX(rect.x); // Save current position
    }
    controls.stop(); // Pause animation
  };

  return (
    <div className="px-2 md:px-24 my-10 overflow-hidden">
      <h1 className="text-[#0a56ab] text-center font-semibold text-2xl md:text-3xl my-10">
        Our Partners
      </h1>
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef} // Reference to track position
          className="flex w-max whitespace-nowrap"
          animate={controls}
          onMouseEnter={pauseAnimation} // Pause on hover
          onMouseLeave={startAnimation} // Resume from paused position
        >
          {logos.concat(logos).map((logo, index) => (
            <Link key={index} to={logo.link} className="mx-10">
              <img
                src={logo.src}
                alt={`Partner ${index + 1}`}
                className="h-14 md:h-22"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OurPartners;
