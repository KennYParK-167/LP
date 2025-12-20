import { Link } from "react-router-dom";
import { CodeIllustration, LightbulbIllustration } from "../Widgets/Illustrations";

const HomePage: React.FC = () => {
  return (
    <div className="min-vh-100 bg-light bg-gradient">
      {/* Logo / Titre */}
      <h1 className="fw-bold text-secondary text-center display-4 py-4">
        <span className="text-primary">E</span>dus
        <span className="text-primary">P</span>lus
      </h1>

      <div className="container py-5">
        {/* HERO */}
        <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
          <div className="mx-auto mb-4" style={{ width: "180px" }}>
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="img-fluid"
            />
          </div>

          <h2 className="mb-4 text-dark">
            Apprends l'informatique à ton rythme
          </h2>

          <p className="text-muted mb-5">
            Une plateforme d'apprentissage simple et efficace pour maîtriser le
            design, le développement web et la data science. Progressez avec des
            exercices adaptés et suivez vos résultats en temps réel.
          </p>

          <Link
  to="/app"
  className="btn btn-primary btn-lg shadow"
>
  Commencer Gratuitement
</Link>
        </div>

        {/* FEATURES */}
        <div className="row g-4 mt-5 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm border-2">
              <div className="card-body">
                <div className="mb-3" style={{ height: "90px" }}>
                  <CodeIllustration />
                </div>
                <h5 className="card-title">
                  Apprentissage Interactif
                </h5>
                <p className="card-text text-muted">
                  Des cours structurés avec des exercices pratiques pour chaque domaine
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm border-2">
              <div className="card-body">
                <div className="mb-3" style={{ height: "90px" }}>
                  <LightbulbIllustration />
                </div>
                <h5 className="card-title">Assistance IA</h5>
                <p className="card-text text-muted">
                  Une intelligence artificielle pour vous guider et répondre à vos questions
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm border-2">
              <div className="card-body">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <svg viewBox="0 0 200 150" width="120">
                    <circle
                      cx="100"
                      cy="75"
                      r="40"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="6"
                      strokeDasharray="200 251"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="100"
                      cy="75"
                      r="40"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="6"
                    />
                    <text
                      x="100"
                      y="85"
                      textAnchor="middle"
                      fontSize="28"
                      fill="#1e293b"
                    >
                      80%
                    </text>
                  </svg>
                </div>
                <h5 className="card-title">
                  Suivi de Progression
                </h5>
                <p className="card-text text-muted">
                  Visualisez vos progrès et restez motivé avec des statistiques détaillées
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
