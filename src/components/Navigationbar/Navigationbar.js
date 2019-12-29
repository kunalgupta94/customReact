import React from "react";
import TriangleButton from "../../assets/TriangleButton";
import "./navigationbar.css";
import ListButton from "../../assets/ListButton";

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }
  
  componentDidMount() {
    const containerRef = this.containerRef.current;
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
    };

    window.addEventListener("mousemove", e => eventListenFunc(e));
    window.addEventListener("click", e => pageClickListner(e));
  }

  render() {
    return (
      <div ref={this.containerRef} className="navigationbar_main">
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
  }
}

export default Navigationbar;
