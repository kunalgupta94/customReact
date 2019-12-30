import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";
import ArticleLayoutView from "../../components/Layouts/ArticleLayout/ArticleLayoutView";

class ArticleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      body: ""
    };
    this.typeComponent = {
      new: "new",
      readOnly: "readOnly",
      readAndWrite: "readAndWrite",
      edit: "edit"
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { client } = this.props;
    const { title, body } = this.state;
    const createArticle = gql`
    mutation {
      createArticle(input: {
        title:"${title}"
        body: "${body}"
        batch: "5e09c70d5786242caf0b224e"
      }){
        _id
        title
        body
        createdAt
        createdBy
        batch
      }
    }
    `;
    client
      .mutate({
        mutation: createArticle
      })
      .then(res => console.log(res));
  }

  onChnageHandler(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  renderNewComponent() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button disabled={title === '' || body === ''} type="submit">Submit</button>
        <ArticleLayoutView
          type={this.typeComponent.new}
          data={this.state}
          onChange={value => this.onChnageHandler(value)}
        />
      </form>
    );
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
            !loading ? (
              <ArticleLayoutView type={type} data={data.article} />
            ) : null
          }
        </Query>
      );
    }
    throw new Error("New component should be used");
  }

  render() {
    const { type } = this.props;
    if (type === "new") {
      return this.renderNewComponent();
    } else {
      return this.renderComponentWithData(this.typeComponent.readAndWrite);
    }
  }
}

export default withApollo(ArticleLayout);
