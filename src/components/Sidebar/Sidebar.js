import React, { useState, useEffect } from "react";
import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
    this.sidebarRef = React.createRef();
  }

  componentDidMount() {
    const closeSidebar = e => {
      const { isCollapsed } = this.state;
      if (
        e.target.id !== "editableInput" &&
        e.target.id !== "editEditableInputTitle" &&
        !e.path.includes(this.sidebarRef.current) &&
        isCollapsed === false
      ) {
        this.setCollapsed(true);
      }
    };
    window.addEventListener("click", e => closeSidebar(e));
  }

  setCollapsed(value) {
    this.setState({
      isCollapsed: value
    });
  }

  render() {
    const { isCollapsed } = this.state;
    return (
      <div
        ref={this.sidebarRef}
        className={`sidebar ${isCollapsed ? "sidebarCollpased" : null}`}
      >
        <button onClick={() => this.setCollapsed(!isCollapsed)}>></button>
      </div>
    );
  }
}

export default Sidebar;
