import React, { useEffect } from "react";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const pointer = document.getElementById("pointer");

    const handleMouseMove = (event: MouseEvent) => {
      if (pointer) {
        pointer.style.left = `${event.clientX}px`;
        pointer.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="pointer" id="pointer"></div>;
};

export default CustomCursor;
