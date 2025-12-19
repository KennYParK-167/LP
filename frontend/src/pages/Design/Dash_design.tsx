import React from "react";

const DS_Dashboard: React.FC = () => {
  const stats_design = {
    progress: 42,
    coursesCompleted: 3,
    exercisesCompleted: 11,
    weeklyTime: "5h 30min",
  };

  return (
    <div className="row g-4">
      {/* Progression */}
      <div className="col-12">
        <div className="card card-custom p-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">📊 Progression globale</h5>
            <span className="fw-semibold">{stats_design.progress}%</span>
          </div>

          <div className="progress mb-2" style={{ height: "10px" }}>
            <div
              className="progress-bar progress-bar-custom"
              role="progressbar"
              style={{ width: `${stats_design.progress}%` }}
              aria-valuenow={stats_design.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <small className="text-muted">
            Continue ton apprentissage pour atteindre le niveau suivant
          </small>
        </div>
      </div>

      {/* Cours terminés */}
      <div className="col-md-4">
        <div className="card card-custom text-center p-4">
          <div className="mb-2 fs-4">📚</div>
          <h6 className="text-muted">Cours terminés</h6>
          <h3 className="fw-bold">{stats_design.coursesCompleted}</h3>
          <small className="text-muted">sur ton parcours actuel</small>
        </div>
      </div>

      {/* Exercices */}
      <div className="col-md-4">
        <div className="card card-custom text-center p-4">
          <div className="mb-2 fs-4">🧠</div>
          <h6 className="text-muted">Exercices réussis</h6>
          <h3 className="fw-bold">{stats_design.exercisesCompleted}</h3>
          <small className="text-muted">compétences validées</small>
        </div>
      </div>

      {/* Temps */}
      <div className="col-md-4">
        <div className="card card-custom text-center p-4">
          <div className="mb-2 fs-4">⏱</div>
          <h6 className="text-muted">Cette semaine</h6>
          <h3 className="fw-bold">{stats_design.weeklyTime}</h3>
          <small className="text-muted">temps d’apprentissage</small>
        </div>
      </div>
    </div>
  );
};

export default DS_Dashboard;
