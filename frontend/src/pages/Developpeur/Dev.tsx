import React, { useState } from "react";
import JD_Dashboard from "./Dash_dev";
import JD_Courses from "./Cours_dev";
import JD_Exercises from "./Exo_dev";

const JeuneDeveloppeur: React.FC = () => {
  const [tab, setTab] = useState<"dashboard" | "courses" | "exercises">("dashboard");

  return (
    <div>
      <h2>👨‍💻 Parcours Jeune Développeur</h2>

      {/* Onglets internes */}
      <div className="btn-group mb-4">
        <button
          className={`btn ${tab === "dashboard" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`btn ${tab === "courses" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("courses")}
        >
          Cours
        </button>
        <button
          className={`btn ${tab === "exercises" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("exercises")}
        >
          Exercices
        </button>
      </div>

      {/* Contenu dynamique */}
      <div>
        {tab === "dashboard" && <JD_Dashboard />}
        {tab === "courses" && <JD_Courses />}
        {tab === "exercises" && <JD_Exercises />}
      </div>
    </div>
  );
};

export default JeuneDeveloppeur;
