import React from "react";
import "./Dev_css/cours_dev.css";

const courses = [
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

const courseHeaderImages = [
  "/images/html_css.jpg",
  "/images/java.jpg",
  "/images/php.jpg",
];


const JD_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="jd-course-card shadow-sm">
            
            <div className="jd-course-header">
              <img 
                src={courseHeaderImages[index] || "/images/default-header.jpg"}
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

              <button 
                className="btn btn-jd w-100 mt-3"
              >
                Commencer à apprendre
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JD_Courses;