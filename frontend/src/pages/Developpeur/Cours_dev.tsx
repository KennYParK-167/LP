import React from "react";
import "./Dev_css/cours_dev.css";

const courses = [
  {
    title: "HTML & CSS",
    tutorials: 35,
    dailyTime: "02:30 h / jour",
    progress: 65,
  },
  {
    title: "JavaScript – Bases",
    tutorials: 120,
    dailyTime: "02:00 h / jour",
    progress: 30,
  },
  {
    title: "React – Introduction",
    tutorials: 55,
    dailyTime: "03:00 h / jour",
    progress: 88,
  },
];

const JD_Courses: React.FC = () => {
  return (
    <div className="row g-4">
      {courses.map((course) => (
        <div key={course.title} className="col-md-6 col-lg-4">
          <div className="jd-course-card">
            
            {/* Image / Illustration */}
            <div className="jd-course-img">
              <span>{course.title.split(" ")[0]}</span>
            </div>

            {/* Contenu */}
            <div className="jd-course-body">
              <h5>{course.title}</h5>

              <div className="jd-course-meta">
                <span>📘 {course.tutorials} tutoriels</span>
                <span>⏱ {course.dailyTime}</span>
              </div>

              {/* Progression */}
              <div className="jd-progress-circle">
                <svg viewBox="0 0 36 36">
                  <path
                    className="bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="progress"
                    strokeDasharray={`${course.progress}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="21" className="percentage">
                    {course.progress}%
                  </text>
                </svg>
              </div>

              <button className="btn btn-jd w-100 mt-3">
                Continuer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JD_Courses;
