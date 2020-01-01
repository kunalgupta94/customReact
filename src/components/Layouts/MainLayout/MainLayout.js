import React from "react";
import "./mainLayout.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { Link } from "react-router-dom";

class MainLayout extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="layoutmain">
        <Navbar
        >
        </Navbar>
        <main className="main_main">
          <div className="mainLayout_children">{children}</div>
        </main>
      </div>
    );
  }
}

export default MainLayout;
