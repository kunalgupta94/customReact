import React, { Children } from "react";
import "./mainLayout.css";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="layoutmain">
      <Navbar />
      <main className="main_main">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
