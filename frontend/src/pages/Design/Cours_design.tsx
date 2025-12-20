import React from "react";
import "./Design_css/cours_design.css";

const courses_design = [
  {
    title: "UX & UI",
    instructor: "Penser l’expérience, façonner l’interface",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Figma",
    instructor: "Là où les idées prennent forme",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
  {
    title: "Montage vidéo",
    instructor: "Coupez, Assemblez, Émotion",
    students: "120+ Students",
    coursesCount: "4 courses",
  },
];

const courseHeaderImages_design = [
  "/images/ux.jpg",
  "/images/figma.jpg",
  "/images/video.jpg",
];


const DS_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses_design.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="jd-course-card shadow-sm">
            
            <div className="jd-course-header">
              <img 
                src={courseHeaderImages_design[index] || "/images/default-header.jpg"}
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

export default DS_Courses;