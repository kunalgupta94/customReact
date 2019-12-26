import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className={`sidebar ${isCollapsed ? null : 'sidebarCollpased'}`}>
        <button onClick={() => setCollapsed(!isCollapsed)}>></button>
    </div>
  );
};

export default Sidebar;
