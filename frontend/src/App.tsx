import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./pages/Dashboard/layouts/PublicLayout";
import AppLayout from "./pages/Dashboard/layouts/AppLayout";

import HomePage from "./pages/Dashboard/Widgets/HomePage";
import Home from "./pages/Dashboard/Widgets/Home";
import Etudiant from "./pages/Etudiant/Etudiant";
import Dev from "./pages/Developpeur/Dev";
import Design from "./pages/Design/Design";
import Data from "./pages/Data/Data";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC : PAGE D'ACCUEIL */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 🔒 APP : AVEC NAVBAR */}
        <Route element={<AppLayout />}>
          <Route path="/app" element={<Home />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/jeune_developpeur" element={<Dev />} />
          <Route path="/designer" element={<Design />} />
          <Route path="/data_scientist" element={<Data />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
