import React, { useState } from "react";
import Sidebar from "./Widgets/Navbar";
import Dev from "../Developpeur/Dev";
import Home from "./Widgets/Home";

const Dashboard: React.FC = () => {
  const [section, setSection] = useState("Home");

  return (
    <div className="d-flex">
      <Sidebar onSelect={setSection} />

      <main
        style={{
          marginLeft: 250,
          padding: "1.5rem",
          transition: "margin-left 0.3s ease",
          width: "100%",
        }}
      >
        {section === "Home" && <Home />}
        {section === "Jeunes développeurs" && <Dev />}
        {section === "Etudiants" && <h2>Dashboard Étudiants</h2>}
        {section === "Designers" && <h2>Dashboard Designers</h2>}
        {section === "Data Scientists" && <h2>Dashboard Data Scientists</h2>}
        {section === "Practice" && <h2>Exercices généraux</h2>}
      </main>
    </div>
  );
};

export default Dashboard;
