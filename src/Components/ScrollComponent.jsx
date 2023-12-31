// ScrollComponent.js
import React, { useEffect, useState } from "react";

const ScrollComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollY = window.scrollY;
      const percentage = (scrollY / documentHeight) * 100;

      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fillStyle = {
    width: `${scrollPercentage}%`,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: "width 0.5s ease",
  };

  return (
    <div className="h-[6px] bg-[#27384B] bg-yellow-300" style={fillStyle}></div>
  );
};

export default ScrollComponent;
