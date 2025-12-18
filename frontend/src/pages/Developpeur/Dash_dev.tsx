import React from "react";

const JD_Dashboard: React.FC = () => {
  const stats = {
    progress: 42,
    coursesCompleted: 3,
    exercisesCompleted: 11,
    weeklyTime: "5h 30min",
  };

  return (
    <div className="row g-3">
      {/* Progression */}
      <div className="col-12">
        <div className="card p-3 shadow-sm">
          <h5>📊 Progression globale</h5>
          <div className="progress mb-2" style={{ height: "10px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${stats.progress}%` }}
            />
          </div>
          <small>{stats.progress}% complété</small>
        </div>
      </div>

      {/* Stats */}
      <div className="col-md-4">
        <div className="card text-center p-3 shadow-sm">
          <h6>📚 Cours terminés</h6>
          <h3>{stats.coursesCompleted}</h3>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center p-3 shadow-sm">
          <h6>🧠 Exercices réussis</h6>
          <h3>{stats.exercisesCompleted}</h3>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center p-3 shadow-sm">
          <h6>⏱ Activité cette semaine</h6>
          <h3>{stats.weeklyTime}</h3>
        </div>
      </div>
    </div>
  );
};

export default JD_Dashboard;
