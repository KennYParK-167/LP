import React, { useState } from "react";
import Navbar from "./Widgets/Navbar";
import Design from "../Design/Design";
import Dev from "../Developpeur/Dev";
import Home from "./Widgets/Home";
import Data from "../Data/Data";
import Etudiant from "../Etudiant/Etudiant";

const Dashboard: React.FC = () => {
  const [section, setSection] = useState("Home");
  const [sidebarWidth, setSidebarWidth] = useState(250);

  return (
    <div className="d-flex">
      <Navbar onWidthChange={setSidebarWidth} onSelect={setSection} />

      <main
        style={{
          marginLeft: sidebarWidth,
          padding: "1.5rem",
          width: "100%",
        }}
      >
        {section === "Home" && <Home />}
        {section === "Jeunes développeurs" && <Dev />}
        {section === "Etudiants" && <Etudiant />}
        {section === "Designers" && <Design />}
        {section === "Data Scientists" && <Data />}
      </main>
    </div>
  );
};

export default Dashboard;
