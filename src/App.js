import React from "react";
import ArticleLayout from "./container/ArticleLayout/ArticleLayout";
import Login from "./Layouts/Login/Login";
import { Switch, Route, Link } from "react-router-dom";
import Routes from "./Routes";
import Temporary from "./Temporary";
import "./main.css";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import UserLayout from "./components/Layouts/UserLayout/UserLayout";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path={Routes.article} component={ArticleLayout} />
          <Route path="/">
            <MainLayout>
              <UserLayout />
            </MainLayout>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
