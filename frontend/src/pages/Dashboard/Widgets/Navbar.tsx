import React, { useState } from "react";
import "./navbar.css"

interface SidebarProps {
  onSelect: (section: string) => void; // Fonction pour changer la section
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Home"); // Gère l'élément actif

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: "fa-home", label: "Home" },
    { icon: "fa-user-graduate", label: "Etudiants" },
    { icon: "fa-code", label: "Jeunes développeurs" },
    { icon: "fa-paint-brush", label: "Designers" },
    { icon: "fa-chart-bar", label: "Data Scientists" },
    { icon: "fa-pencil-alt", label: "Practice" },
  ];

  const handleClick = (label: string) => {
    setActiveLabel(label);   // Met à jour le style actif
    onSelect(label);         // Notifie le parent
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <nav
        className={`d-flex flex-column flex-shrink-0 position-fixed sidebar text-white ${
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
          {menuItems.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`nav-link text-white d-flex align-items-center px-3 py-2 rounded ${
                activeLabel === label ? "bg-dark" : ""
              }`}
              style={{
                whiteSpace: "nowrap",
                border: "none",
                background: "transparent",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <i className={`fas ${icon} me-3`} style={{ minWidth: 20 }}></i>
              {!collapsed && <span>{label}</span>}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
