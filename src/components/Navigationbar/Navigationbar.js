import React from "react";
import TriangleButton from "../../assets/TriangleButton";
import "./navigationbar.css";
import ListButton from "../../assets/ListButton";

const Navigationbar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="navigationbar_main">
      <div className="button">
        <TriangleButton />
      </div>
      <div className="titleBox">
        <div className="moreTitles">
          <ListButton />
        </div>
        <div className="titleText">Chapter 1: Some title text</div>
      </div>
      <div className="button">
        <TriangleButton rotate={true} />
      </div>
    </div>
  );
});

export default Navigationbar;
