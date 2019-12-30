import React from "react";
import "./userLayout.css";
import ArticleCard from "../../ArticleCard/ArticleCard";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const UserLayout = () => {
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
    <div>
      <header className="user_header"></header>
      <Query query={articleQuery}>
        {({ loading, err, data }) => {
          if (!loading) {
            return data.articles.map(article => (
              <ArticleCard key={article._id} articleData={article} />
            ));
          }
          return null;
        }}
      </Query>
    </div>
  );
};

export default UserLayout;
