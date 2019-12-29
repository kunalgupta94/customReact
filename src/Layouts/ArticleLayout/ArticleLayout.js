import React, { useState, useEffect } from "react";
import "./articleLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigationbar from "../../components/Navigationbar/Navigationbar";
import EditableText from "../../components/EditableInput/EditableText";

class ArticleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      titleText: "Title Text",
      bodyText: "Body Text"
    };
  }

  render() {
    const { titleText, bodyText } = this.state;
    return (
      <div className="layoutmain">
        <div className="sidebardiv">
          <Sidebar />
        </div>
        <div className="maindiv">
          <div className="contentContainer">
            <h1 className="title">
              <EditableText
                value={titleText}
                onChange={e => this.setState({ titleText: e.target.value })}
                editable
                maxLength="50"
                rows="1"
                placeholder="Enter a title"
              />
            </h1>
            <p className="body">
              <EditableText
                editable
                maxLength="5000"
                rows="10"
                placeholder="Enter body text"
                value={bodyText}
              />
            </p>
          </div>
          <Navigationbar ref={this.containerRef} />
        </div>
      </div>
    );
  }
}

export default ArticleLayout;
