import React from "react";
import "./TriangleButton.css";

const TriangleButton = ({ rotate }) => {
  return (
    <div className={`triangleButton ${rotate ? "rotated" : null}`}>
      <svg
      style={{display: 'block'}}
        width="6vh"
        height="6vh"
        viewBox="0 0 53 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 31L52.5 0.68911L52.5 61.3109L0 31Z" fill="#C4C4C4" />
      </svg>
    </div>
  );
};

export default TriangleButton;
