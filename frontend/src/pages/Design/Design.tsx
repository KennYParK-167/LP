import React, { useState } from "react";
import "./Design_css/dash_design.css";
import "./Design_css/cours_design.css";
import Dash_design from "./Dash_design";
import Cours_design from "./Cours_design";
import Exo_design from "./Exo_design";

const Design: React.FC = () => {
  const [tab, setTab] = useState<"dashboard" | "courses" | "exercises">("dashboard");

  return (
    <div>
      <h2 className="mb-4">Parcours Designer</h2>

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
        {tab === "dashboard" && <Dash_design />}
        {tab === "courses" && <Cours_design />}
        {tab === "exercises" && <Exo_design />}
      </div>
    </div>
  );
};

export default Design;
