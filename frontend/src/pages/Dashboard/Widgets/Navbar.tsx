import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { href: "#", icon: "fa-home", label: "Home", active: true },
    { href: "#", icon: "fa-user-graduate", label: "Etudiants" },
    { href: "#", icon: "fa-code", label: "Jeunes développeurs" },
    { href: "#", icon: "fa-paint-brush", label: "Designers" },
    { href: "#", icon: "fa-chart-bar", label: "Data Scientists" },
    { href: "#", icon: "fa-pencil-alt", label: "Practice" },
  ];

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <nav
        className={`d-flex flex-column flex-shrink-0 position-fixed bg-secondary text-white ${
          collapsed ? "collapsed" : ""
        }`}
        style={{
          width: collapsed ? 70 : 250,
          height: "100vh",
          transition: "width 0.3s ease",
          overflow: "hidden",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          zIndex: 1040,
        }}
        aria-label="Sidebar navigation"
      >
        <button
          onClick={toggleSidebar}
          className="btn btn-dark align-self-end me-2 mb-3"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{ fontSize: "1.2rem" }}
        >
          <i className={`fas fa-chevron-${collapsed ? "right" : "left"}`}></i>
        </button>

        <div className="nav flex-column flex-grow-1 px-1">
          {menuItems.map(({ href, icon, label, active }) => (
            <a
              key={label}
              href={href}
              className={`nav-link text-white d-flex align-items-center px-3 py-2 rounded ${
                active ? "bg-dark" : ""
              }`}
              style={{ whiteSpace: "nowrap" }}
            >
              <i className={`fas ${icon} me-3`} style={{ minWidth: 20 }}></i>
              {!collapsed && <span>{label}</span>}
            </a>
          ))}
        </div>
      </nav>

      <main
        style={{
          marginLeft: collapsed ? 70 : 250,
          padding: "1.5rem",
          transition: "margin-left 0.3s ease",
          width: "100%",
        }}
      ></main>
    </div>
  );
};

export default Sidebar;
