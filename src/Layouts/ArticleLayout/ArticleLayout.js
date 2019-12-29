import React, { useState, useEffect } from "react";
import "./articleLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigationbar from "../../components/Navigationbar/Navigationbar";
import EditableText from "../../components/EditableInput/EditableText";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";

class ArticleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      titleText: "Title Text",
      bodyText: "Body Text"
    };
    this.typeComponent = {
      new: "new",
      readOnly: "readOnly",
      readAndWrite: "readAndWrite",
      edit: "edit"
    };
  }

  viewComponent(type, data) {
    return (
      <div className="layoutmain">
        <div className="sidebardiv">
          <Sidebar />
        </div>
        <div className="maindiv">
          <div className="contentContainer">
            <h1 className="title">
              <EditableText
                edit={
                  type === this.typeComponent.new ||
                  type === this.typeComponent.edit
                }
                value={data.title}
                onChange={e => this.setState({ titleText: e.target.value })}
                editable={
                  type === this.typeComponent.new ||
                  type === this.typeComponent.edit ||
                  type === this.typeComponent.readAndWrite
                }
                maxLength="50"
                rows="1"
                placeholder="Enter a title"
              />
            </h1>
            <p className="body">
              <EditableText
                edit={
                  type === this.typeComponent.new ||
                  type === this.typeComponent.edit
                }
                editable={
                  type === this.typeComponent.new ||
                  type === this.typeComponent.edit ||
                  type === this.typeComponent.readAndWrite
                }
                maxLength="5000"
                rows="10"
                placeholder="Enter body text"
                value={data.body}
              />
            </p>
          </div>
          <Navigationbar ref={this.containerRef} />
        </div>
      </div>
    );
  }

  renderNewComponent() {
    return this.viewComponent(this.typeComponent.new);
  }

  renderComponentWithData(type) {
    const ARTICLE_QUERY = gql`
    {
      article (_id:"${this.props.match.params.articleId}") {
        _id
        title
        body
        createdBy
      }
    }
    `;
    if (type !== this.typeComponent.new) {
      return (
        <Query query={ARTICLE_QUERY}>
          {({ loading, err, data }) =>
            !loading ? this.viewComponent(type, data.article) : null
          }
        </Query>
      );
    }
    throw new Error("New component should be used");
  }

  render() {
    return this.renderComponentWithData(this.typeComponent.new);
  }
}

export default withApollo(ArticleLayout);
