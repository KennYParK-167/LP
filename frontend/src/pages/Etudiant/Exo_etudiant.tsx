import React from "react";

const exercises_etude = [
  "Lancer un dé équilibré",
  "Multiplier matrice × vecteur",
  "Table de vérité ET / OU",
  "Négation d’une proposition",
  "Calcul de pourcentages",
  "Résoudre une équation du 2nd degré",
  "Calcul de dérivée simple",
  "Intégrale définie d’une fonction polynomiale",
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
