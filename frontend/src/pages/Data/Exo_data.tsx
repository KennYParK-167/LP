import React from "react";

const exercises_data = [
  "Créer une page HTML simple",
  "Manipuler le DOM avec JavaScript",
  "Créer un composant React",
  "Connexion API avec fetch",
  "Mini-projet React : To-Do List",
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
