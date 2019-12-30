import React, { useState, useEffect } from "react";
import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef();
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  closeSidebar(e) {
    const { isCollapsed, setSidebarCollapsed } = this.props;
    if (
      !e.path.includes(this.sidebarRef.current) &&
      isCollapsed === false &&
      !e.path.find(val => val.id === 'hamburger')
    ) {
      console.log("rendered")
      setSidebarCollapsed(true)
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.closeSidebar);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.closeSidebar);
  }

  setCollapsed(value) {
    this.setState({
      isCollapsed: value
    });
  }

  render() {
    const { isCollapsed, setSidebarCollapsed, children } = this.props;
    return (
      <div
        ref={this.sidebarRef}
        className={`sidebar`}
      >
        {children}
      </div>
    );
  }
}

export default Sidebar;
