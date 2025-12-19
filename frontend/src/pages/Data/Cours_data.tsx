import React from "react";
import "./Data_css/cours_data.css";

const courses_data = [
  {
    title: "Analyse de données",
    instructor: "Transformer les données en décisions",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Machine learning",
    instructor: "Les données entraînent l’intelligence",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Vision par ordinateur",
    instructor: "Les machines voient tout",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
];

const courseHeaderImages_data = [
  "/images/analyst.jpg",
  "/images/learning.jpg",
  "/images/vision.jpeg",
];


const DT_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses_data.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="jd-course-card shadow-sm">
            
            {/* En-tête de la carte avec prix */}
            <div className="jd-course-header">
              <img 
                src={courseHeaderImages_data[index] || "/images/default-header.jpg"}
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

export default DT_Courses;