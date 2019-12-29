import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApollo, Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { client } = this.props;
    const query1 = gql`
      {
        loginQuery(
          input: { email: "kunalgupta9607@gmail.com", password: "514514514" }
        ) {
          token
        }
      }
    `;
    client
      .query({ query: query1 })
      .then(res =>
        window.localStorage.setItem("tokenAuth", res.data.loginQuery.token)
      )
      .then(() => window.location.reload());
  }
  render() {
    const allBatchuery = gql`
      {
        batches {
          _id
          name
          description
          createdAt
          createdBy
        }
      }
    `;
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          id
          <input name="id" type="text" />
          password
          <input name="password" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withApollo(Login);
