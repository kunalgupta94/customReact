import React from "react";
import "./mainLayout.css";
import Navbar from "../../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="layoutmain">
      <Navbar />
      <main className="main_main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
