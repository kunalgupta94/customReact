import React from "react";
import ArticleLayout from "./container/ArticleLayout/ArticleLayout";
import Login from "./Layouts/Login/Login";
import { Switch, Route, Link } from "react-router-dom";
import Routes from "./Routes";
import Temporary from "./Temporary";
import "./main.css";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import UserLayout from "./components/Layouts/UserLayout/UserLayout";
import ArticleCard from "./components/ArticleCard/ArticleCard";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <MainLayout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path={Routes.article} component={ArticleLayout} />
            <Route path="/newArticle">
              <ArticleLayout type={"new"} />
            </Route>
            <Route path="/">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20rem" }}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </div>
            </Route>
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default App;
