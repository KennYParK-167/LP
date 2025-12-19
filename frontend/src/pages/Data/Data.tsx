import React, { useState } from "react";
import "./Dev_css/dash_dev.css";
import "./Dev_css/cours_dev.css";
import Cours_data from "./Cours_data";
import Dash_data from "./Dash_data";
import Exo_data from "./Exo_data"

const Data: React.FC = () => {
  const [tab, setTab] = useState<"dashboard" | "courses" | "exercises">("dashboard");

  return (
    <div>
      <h2 className="mb-4">Parcours Jeune Développeur</h2>

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
        {tab === "dashboard" && <Dash_data />}
        {tab === "courses" && <Cours_data />}
        {tab === "exercises" && <Exo_data />}
      </div>
    </div>
  );
};

export default Data;
