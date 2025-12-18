import React from "react";

const courses = [
  { title: "HTML & CSS", level: "Débutant" },
  { title: "JavaScript – Bases", level: "Débutant" },
  { title: "React – Introduction", level: "Intermédiaire" },
  { title: "Node.js – Backend", level: "Intermédiaire" },
];

const JD_Courses: React.FC = () => {
  return (
    <div className="row g-3">
      {courses.map((course) => (
        <div key={course.title} className="col-md-6 col-lg-4">
          <div className="card p-3 shadow-sm">
            <h5>{course.title}</h5>
            <small className="text-muted">{course.level}</small>
            <button className="btn btn-primary btn-sm mt-2">Commencer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JD_Courses;
