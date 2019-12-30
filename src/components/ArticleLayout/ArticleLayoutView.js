import React from "react";
import "./articleLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Navigationbar from "../Navigationbar/Navigationbar";
import EditableText from "../EditableInput/EditableText";

const ArticleLayoutView = ({type, data}) => {
  const typeComponent = {
    new: "new",
    readOnly: "readOnly",
    readAndWrite: "readAndWrite",
    edit: "edit"
  };
  return (
    <div className="layoutmain">
      <div className="sidebardiv">
        <Sidebar />
      </div>
      <div className="maindiv">
        <div className="contentContainer">
          <h1 className="title">
            <EditableText
              edit={type === typeComponent.new || type === typeComponent.edit}
              value={data.title}
              onChange={e => {
                if (onChange) {
                  onChange(e);
                }
              }}
              editable={
                type === typeComponent.new ||
                type === typeComponent.edit ||
                type === typeComponent.readAndWrite
              }
              maxLength="50"
              rows="1"
              placeholder="Enter a title"
            />
          </h1>
          <p className="body">
            <EditableText
              edit={type === typeComponent.new || type === typeComponent.edit}
              editable={
                type === typeComponent.new ||
                type === typeComponent.edit ||
                type === typeComponent.readAndWrite
              }
              onChange={e => {
                if (onChange) {
                  onChange(e);
                }
              }}
              maxLength="5000"
              rows="10"
              placeholder="Enter body text"
              value={data.body}
            />
          </p>
        </div>
        <Navigationbar />
      </div>
    </div>
  );
};

export default ArticleLayoutView;
