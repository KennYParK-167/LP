import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-7">
          <h1 className="fw-bold">Bienvenue !</h1>
          <p className="text-secondary">
            Ce site est fait pour une education informatique, apprendre depuis
            les bases jusqu'au niveau expert
          </p>
        </div>

        <div className="col text-center">
          <small className="text-muted d-block text-uppercase">Connexions</small>
          <span className="display-4">1</span>
          <p className="small text-muted">Record du jour!</p>
        </div>

        <div className="col text-center">
          <small className="text-muted d-block text-uppercase">Progression</small>
          <div
            className="rounded-circle border border-5 d-inline-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              borderColor: "#00d1cd",
            }}
          >
            <b className="fs-4">0%</b>
          </div>
          <p className="small text-muted mt-2">Du niveau expert</p>
        </div>
      </div>

      <hr />
      <div className="row mt-4 g-4">
        {[
          { label: "Jeunes développeurs", val: "0", sub: "niveau atteint" },
          { label: "Designers", val: "0", sub: "niveau atteint" },
          { label: "Data scientists", val: "0", sub: "niveau atteint" },
          { label: "Practice", val: "0", sub: "accomplies" },
        ].map((item, i) => (
          <div key={i} className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3">{item.label}</h6>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start border-start border-3 ps-3">
              <span className="display-6 me-2">{item.val}</span>
              <small className="text-muted">{item.sub}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <small className="text-muted" style={{ cursor: "pointer" }}>
          Hide stats
        </small>
      </div>
      <hr />
    </div>
  );
};

export default Home;
