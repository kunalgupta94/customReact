import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigationbar from "../../components/Navigationbar/Navigationbar";
import EditableText from "../../components/EditableInput/EditableText";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";
import ArticleLayoutView from "../../components/ArticleLayout/ArticleLayoutView";


class ArticleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title Text",
      body: "Body Text"
    };
    this.typeComponent = {
      new: "new",
      readOnly: "readOnly",
      readAndWrite: "readAndWrite",
      edit: "edit"
    };
  }

  renderNewComponent() {
    return <ArticleLayoutView type={this.typeComponent.new} data={this.state} />;
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
            !loading ? <ArticleLayoutView type={type} data={data.article} /> : null
          }
        </Query>
      );
    }
    throw new Error("New component should be used");
  }

  render() {
    return this.renderComponentWithData(this.typeComponent.readAndWrite);
  }
}

export default withApollo(ArticleLayout);
