import React from "react";

const exercises_etude = [
  "Créer une page HTML simple",
  "Manipuler le DOM avec JavaScript",
  "Créer un composant React",
  "Connexion API avec fetch",
  "Mini-projet React : To-Do List",
];

const ET_Exercises: React.FC = () => {
  return (
    <ul className="list-group">
      {exercises_etude.map((ex, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {ex}
          <button className="btn btn-outline-success btn-sm">Résoudre</button>
        </li>
      ))}
    </ul>
  );
};

export default ET_Exercises;
