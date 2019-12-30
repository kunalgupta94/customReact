import React from "react";
import "./mainLayout.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { Link } from "react-router-dom";

class MainLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
    this.setSidebarCollapsed = this.setSidebarCollapsed.bind(this);
  }

  setSidebarCollapsed(value) {
    this.setState({
      isCollapsed: value
    });
  }

  render() {
    const { children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="layoutmain">
        <Navbar
          isCollapsed={isCollapsed}
          setSidebarCollapsed={this.setSidebarCollapsed}
        >
          <Link to="/">Home</Link>
          <button>
            <Link to={`/newArticle`}>Create Article</Link>
          </button>
        </Navbar>
        <main className="main_main">
          {!isCollapsed ? (
            <Sidebar
              isCollapsed={isCollapsed}
              setSidebarCollapsed={this.setSidebarCollapsed}
            />
          ) : null}
          <div className="mainLayout_children">{children}</div>
        </main>
      </div>
    );
  }
}

export default MainLayout;
