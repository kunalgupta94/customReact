import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter } from "react-router-dom";
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  headers: {
    authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFsZ3VwdGE5NjA3QGdtYWlsLmNvbSIsIl9pZCI6IjVlMDljNmIxNTc4NjI0MmNhZjBiMjI0ZCIsImlhdCI6MTU3NzcyMzU0NH0.axDmzIZ2DLCWNyVdqwUqdein9csEkf0kxFFghBW9vP8"
  }
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
