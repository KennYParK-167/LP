import React from "react";

const exercises_design = [
  "Refaire un bouton moderne",
  "Choisir 3 couleurs cohérentes",
  "Dessiner un logo en 10 minutes",
  "Créer une icône simple",
];

const DS_Exercises: React.FC = () => {
  return (
    <ul className="list-group">
      {exercises_design.map((ex, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {ex}
          <button className="btn btn-outline-success btn-sm">Résoudre</button>
        </li>
      ))}
    </ul>
  );
};

export default DS_Exercises;
