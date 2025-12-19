import React from "react";

const exercises_data = [
  "Calculer la moyenne d’un ensemble de nombres",
  "Trouver la médiane",
  "Valeurs / Vecteurs propres",
  "Classification binaire",
  "Validation croisée",
  "Boxplot clair",
  "Courbe temporelle",
  "Histogramme simple",
];

const DT_Exercises: React.FC = () => {
  return (
    <ul className="list-group">
      {exercises_data.map((ex, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {ex}
          <button className="btn btn-outline-success btn-sm">Résoudre</button>
        </li>
      ))}
    </ul>
  );
};

export default DT_Exercises;
