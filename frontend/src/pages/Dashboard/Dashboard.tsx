import React, { useState } from "react";
import Sidebar from "./Widgets/Navbar";
import Design from "../Design/Design";
import Dev from "../Developpeur/Dev";
import Home from "./Widgets/Home";
import Data from "../Data/Data";
import Etudiant from "../Etudiant/Etudiant";


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
        {section === "Etudiants" && <Etudiant />}
        {section === "Designers" && <Design />}
        {section === "Data Scientists" && <Data />}
        {section === "Practice" && <h2>Exercices généraux</h2>}
      </main>
    </div>
  );
};

export default Dashboard;
