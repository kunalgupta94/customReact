import React from "react";
import ArticleLayout from "./container/ArticleLayout/ArticleLayout";
import Login from "./Layouts/Login/Login";
import { Switch, Route, Link } from "react-router-dom";
import Routes from './Routes';
import Temporary from "./Temporary";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path={Routes.article} component={ArticleLayout }/>
          <Route path="/">
            <Temporary />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
