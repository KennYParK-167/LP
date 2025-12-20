import Navbar from "../Widgets/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AppLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(250);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Navbar onWidthChange={setSidebarWidth} />

      {/* CONTENU */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: sidebarWidth,
          padding: "1rem",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
