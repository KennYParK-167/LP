import React from "react";
import "./Design_css/cours_design.css";

const courses_design = [
  {
    title: "HTML & CSS",
    instructor: "Structure et style, codez votre monde",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "JAVA",
    instructor: "Java, le langage qui fait tourner le monde",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "PHP",
    instructor: "Du serveur au navigateur, PHP fait le lien",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
];

const courseHeaderImages_design = [
  "/images/html_css.jpg",
  "/images/java.jpg",
  "/images/php.jpg",
];


const DS_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses_design.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="jd-course-card shadow-sm">
            
            {/* En-tête de la carte avec prix */}
            <div className="jd-course-header">
              <img 
                src={courseHeaderImages_design[index] || "/images/default-header.jpg"}
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

export default DS_Courses;