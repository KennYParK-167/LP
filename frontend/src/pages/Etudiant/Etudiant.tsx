import React, { useState } from "react";
import "./Etudiant_css/dash_etude.css";
import "./Etudiant_css/cours_etude.css";
import Dash_etudiant from "./Dash_etudiant";
import Cours_etudiant from "./Cours_etudiant";
import Exo_etudiant from "./Exo_etudiant";

const Etudiant: React.FC = () => {
  const [tab, setTab] = useState<"dashboard" | "courses" | "exercises">("dashboard");

  return (
    <div>
      <h2 className="mb-4">Parcours des étudiants</h2>

      {/* Onglets internes */}
      <div className="btn-group mb-4">
        <button
          className={`btn ${tab === "dashboard" ? "btn-primary-custom" : "btn-outline-primary"}`}
          onClick={() => setTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`btn ${tab === "courses" ? "btn-primary-custom" : "btn-outline-primary"}`}
          onClick={() => setTab("courses")}
        >
          Cours
        </button>
        <button
          className={`btn ${tab === "exercises" ? "btn-primary-custom" : "btn-outline-primary"}`}
          onClick={() => setTab("exercises")}
        >
          Exercices
        </button>
      </div>

      {/* Contenu dynamique */}
      <div>
        {tab === "dashboard" && <Dash_etudiant />}
        {tab === "courses" && <Cours_etudiant />}
        {tab === "exercises" && <Exo_etudiant />}
      </div>
    </div>
  );
};

export default Etudiant;
