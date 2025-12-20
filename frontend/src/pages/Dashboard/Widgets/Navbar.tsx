import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

type onWidthChange = (width: number) => void;

interface NavbarProps {
  onSelect?: (route: string) => void;
  collapsed?: boolean;
  onCollapse?: () => void;
  onWidthChange:(width: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelect, onWidthChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarWidth =
  window.innerWidth < 768
    ? isMobileMenuOpen
      ? 250
      : 0
    : collapsed
    ? 70
    : 250;
  useEffect(() => {
    onWidthChange(sidebarWidth);
  }, [sidebarWidth, onWidthChange]);

  const menuItems = [
    { icon: "fa-home", label: "Home", route: "/app" },
    { icon: "fa-user-graduate", label: "Etudiants", route: "/etudiant" },
    { icon: "fa-code", label: "Jeunes développeurs", route: "/jeune_developpeur" },
    { icon: "fa-paint-brush", label: "Designers", route: "/designer" },
    { icon: "fa-chart-bar", label: "Data Scientists", route: "/data_scientist" },
  ];

  const activeRoute = location.pathname;

  // Fermer le menu mobile à la navigation
  const handleClick = (route: string) => {
    navigate(route);
    if (onSelect) onSelect(route);
    setMobileMenuOpen(false);
  };

  // Pour fermer le menu mobile si la fenêtre est agrandie
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className="btn btn-primary d-md-none m-2 position-fixed"
        style={{ zIndex: 1100 }}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className="fas fa-bars"></i>
      </button>

      <nav
        className={`
          d-flex flex-column flex-shrink-0 position-fixed sidebar text-white
          ${collapsed ? "collapsed" : ""}
          ${isMobileMenuOpen ? "mobile-open" : ""}
        `}
        style={{
          width: sidebarWidth,
          height: "100vh",
          transition: "width 0.3s ease, transform 0.3s ease",
          overflow: "hidden",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          zIndex: 1050,
        }}
        aria-label="Sidebar navigation"
      >

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-sm btn-light m-2 d-none d-md-block"
          aria-label={collapsed ? "Déplier le menu" : "Réduire le menu"}
        >
          {collapsed ? "→" : "EduPlus"}
        </button>

        <div className="nav flex-column flex-grow-1 px-1">
          {menuItems.map(({ icon, label, route }) => (
            <button
              key={route}
              onClick={() => handleClick(route)}
              className={`nav-link text-white d-flex align-items-center px-3 py-2 rounded ${
                activeRoute === route ? "bg-dark" : ""
              }`}
              style={{
                whiteSpace: "nowrap",
                border: "none",
                background: "transparent",
                textAlign: "left",
                cursor: "pointer",
              }}
              type="button"
            >
              <i className={`fas ${icon} me-3`} style={{ minWidth: 20 }}></i>
              {!collapsed && <span>{label}</span>}
            </button>
          ))}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1040,
          }}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;
