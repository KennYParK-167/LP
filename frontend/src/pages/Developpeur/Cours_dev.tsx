import React, { useState, useEffect } from "react";

interface Recommendation {
  title: string;
  platform: string;
  reason: string;
  url: string;
}

const Cours_dev: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  // Fonction déclenchée quand on clique sur "Commencer" un cours local
  const handleStartCourse = async (courseTitle: string) => {
    try {
      // 1. On informe le serveur du choix (pour l'historique SQL)
      await fetch("http://localhost:5000/api/course/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: courseTitle, category: "Développement" }),
      });

      // 2. On rafraîchit les recommandations IA basées sur ce nouvel historique
      fetchRecommendations();
      
      alert(`Démarrage du cours : ${courseTitle}`);
    } catch (error) {
      console.error("Erreur activité:", error);
    }
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/course/recommendations");
      const data = await res.json();
      setRecommendations(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="cours-container">
      <h3>Mes Cours de Développement</h3>
      
      {/* Liste de vos cours locaux */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>HTML/CSS Fondamentaux</h5>
            <button 
              className="btn btn-primary-custom mt-2"
              onClick={() => handleStartCourse("HTML/CSS Fondamentaux")}
            >
              Commencer
            </button>
          </div>
        </div>
        {/* Ajoutez d'autres cartes ici... */}
      </div>

      <hr />

      {/* Section Recommandations IA */}
      <div className="recom-section mt-4">
        <h4>Suggéré pour vous par l'IA</h4>
        {loading ? (
          <p>Chargement des suggestions...</p>
        ) : (
          <div className="row">
            {recommendations.map((rec, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card h-100 border-primary p-3">
                  <small className="text-primary fw-bold">{rec.platform}</small>
                  <h6 className="mt-2">{rec.title}</h6>
                  <p className="small text-muted italic">{rec.reason}</p>
                  <a href={rec.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
                    Voir la ressource
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cours_dev;