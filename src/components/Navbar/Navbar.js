import React, { Component } from "react";
import "./navbar.css";
import Hamburger from "../../assets/Hamburger";
class Navbar extends Component {
  render() {
    const { setSidebarCollapsed, isCollapsed, children } = this.props;
    return (
      <nav className="navbar_main">
        <button
          onClick={() => setSidebarCollapsed(!isCollapsed)}
          className="navbar_hamburger_options"
          id="hamburger"
        >
          <Hamburger />
        </button>
        {children}
      </nav>
    );
  }
}

export default Navbar;
