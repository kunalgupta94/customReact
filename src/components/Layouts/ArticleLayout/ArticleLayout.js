import React, { useState, useEffect } from "react";
import "./articleLayout.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navigationbar from "../../Navigationbar/Navigationbar";
import Title from "./Title";
import "./title.css";
function ArticleLayout() {
  let containerRef;
  useEffect(() => {
    let timeOutValue = 0;

    const hideNavigation = value => {
      if (value) {
        containerRef.style.display = "none";
      } else {
        containerRef.style.display = "flex";
      }
    };
    const setTimeOut = () => setTimeout(() => hideNavigation(true), 2000);
    const mouseOnBottom = e => 100 - (100 * e.y) / e.view.innerHeight < 5;
    const containerHidden = () => containerRef.style.display === "none";
    const mouseOnNavigator = e => e.path.includes(containerRef);
    hideNavigation(false);

    const eventListenFunc = e => {
      clearTimeout(timeOutValue);
      if (!mouseOnNavigator(e)) {
        if (containerHidden() && mouseOnBottom(e)) {
          hideNavigation(false);
          timeOutValue = setTimeOut();
        } else {
          timeOutValue = setTimeOut();
        }
      } else {
        containerRef.style.display = "flex";
      }
    };

    const pageClickListner = e => {
      if (!mouseOnNavigator(e)) {
        hideNavigation(true);
      }
      console.log("value");
    };

    window.addEventListener("mousemove", e => eventListenFunc(e));
    window.addEventListener("click", e => pageClickListner(e));
  }, []);

  return (
    <div className="layoutmain">
      <div className="sidebardiv">
        <Sidebar />
      </div>
      <div className="maindiv">
        <div className="contentContainer">
          <h1 className="title">
            <Title
              edit
              editable
              maxLength="50"
              rows="1"
              placeholder="Enter a title"
            />
          </h1>
          <p className="body">
            <Title
              editable
              maxLength="5000"
              rows="10"
              placeholder="Enter body text"
            />
          </p>
        </div>
        <Navigationbar ref={el => (containerRef = el)} />
      </div>
    </div>
  );
}

export default ArticleLayout;
