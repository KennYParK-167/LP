import React, { useState } from "react";
import "./Etudiant_css/cours_etude.css";

const courses_etude = [
  {
    title: "Probabilité",
    instructor: "Comprendre le hasard, maîtriser les chances",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Algèbre linéaire",
    instructor: "Quand les matrices donnent des réponses",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Statistique",
    instructor: "Derrière chaque donnée, une histoire",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
];

const courseHeaderImages_etude = [
  "/images/proba.jpg",
  "/images/linear.jpg",
  "/images/stat.jpg",
];

interface Recommendation {
  title: string;
  platform: string;
  reason: string;
  url: string;
}

const ET_Courses: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartLearning = async (courseTitle: string) => {
    setLoading(true);
    setError(null);
    setRecommendations([]);
    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseTitle }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des recommandations");
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row g-4">
        {courses_etude.map((course, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="jd-course-card shadow-sm">
              <div className="jd-course-header">
                <img
                  src={courseHeaderImages_etude[index] || "/images/default-header.jpg"}
                  alt={course.title}
                  className="jd-course-header-img"
                />
              </div>
              <div className="jd-course-body">
                <h5 className="jd-course-title">{course.title}</h5>
                <p className="jd-course-instructor">{course.instructor}</p>
                <div className="jd-course-meta">
                  <div className="jd-meta-item">
                    <span className="jd-meta-icon">📚</span>
                    <span>{course.coursesCount}</span>
                  </div>
                  <div className="jd-meta-item">
                    <span className="jd-meta-icon">👥</span>
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Bouton déclencheur */}
                <button
                  className="btn btn-jd w-100 mt-3"
                  onClick={() => handleStartLearning(course.title)}
                >
                  Commencer à apprendre
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Affichage des recommandations */}
      <div style={{ marginTop: "40px" }}>
        <h3>Suggestions de cours recommandés</h3>
        {loading && <p>Chargement des recommandations...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && recommendations.length === 0 && (
          <p>Aucune recommandation pour le moment.</p>
        )}
        <ul>
          {recommendations.map((rec, idx) => (
            <li key={idx} style={{ marginBottom: "1em" }}>
              <a href={rec.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>
                {rec.title}
              </a>{" "}
              <span>({rec.platform})</span>
              <p>{rec.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ET_Courses;
