import React, { useState } from "react";

interface SidebarProps {
  onSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: "fa-home", label: "Home" },
    { icon: "fa-user-graduate", label: "Etudiants" },
    { icon: "fa-code", label: "Jeunes développeurs" },
    { icon: "fa-paint-brush", label: "Designers" },
    { icon: "fa-chart-bar", label: "Data Scientists" },
    { icon: "fa-pencil-alt", label: "Practice" },
  ];

  return (
    <nav
      className="d-flex flex-column position-fixed bg-secondary text-white"
      style={{
        width: collapsed ? 70 : 250,
        height: "100vh",
        padding: "1rem",
      }}
    >
      <button
        onClick={toggleSidebar}
        className="btn btn-dark mb-3 align-self-end"
      >
        <i className={`fas fa-chevron-${collapsed ? "right" : "left"}`} />
      </button>

      {menuItems.map(({ icon, label }) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          className="nav-link text-white d-flex align-items-center px-3 py-2 rounded bg-transparent border-0 text-start"
        >
          <i className={`fas ${icon} me-3`} />
          {!collapsed && label}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
