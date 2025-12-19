import React, { useState } from "react";
import "./Dev_css/dash_dev.css";
import "./Dev_css/cours_dev.css";
import Dash_dev from "./Dash_dev";
import Cours_dev from "./Cours_dev";
import Exo_dev from "./Exo_dev";

const Dev: React.FC = () => {
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
        {tab === "dashboard" && <Dash_dev />}
        {tab === "courses" && <Cours_dev />}
        {tab === "exercises" && <Exo_dev />}
      </div>
    </div>
  );
};

export default Dev;
