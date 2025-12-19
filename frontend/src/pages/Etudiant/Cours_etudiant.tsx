import React from "react";
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
    title: "Statisqtique",
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


const ET_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses_etude.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="jd-course-card shadow-sm">
            
            {/* En-tête de la carte avec prix */}
            <div className="jd-course-header">
              <img 
                src={courseHeaderImages_etude[index] || "/images/default-header.jpg"}
                alt={course.title}
                className="jd-course-header-img"
              />
            </div>

            {/* Contenu principal */}
            <div className="jd-course-body">
              <h5 className="jd-course-title">{course.title}</h5>
              <p className="jd-course-instructor">{course.instructor}</p>

              {/* Métadonnées */}
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

              {/* Bouton d'action */}
              <button 
                className="btn btn-jd w-100 mt-3"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ET_Courses;