import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";

class Temporary extends Component {
  render() {
    const articleQuery = gql`
      {
        articles {
          _id
          title
          body
          createdBy
        }
      }
    `;
    return (
      <MainLayout>
        <Query query={articleQuery}>
          {({ loading, err, data }) => {
            if (!loading) {
              return data.articles.map(article => (
                <Link key={article._id} to={`/article/${article._id}`}>{article.title}</Link>
              ));
            }
            return null;
          }}
        </Query>
        </MainLayout>
    );
  }
}

export default Temporary;
