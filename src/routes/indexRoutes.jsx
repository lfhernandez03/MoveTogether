import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRoutes from "../routes/auth/authRoutes"; // Ejemplo de otra ruta global
import MainLayout from "../views/layouts/mainLayout";
import LoginPage from "../views/pages/loginPage";
import HomeRoutes from "./home/homeRoutes";
import { WellcomePage, InitialInfoPage } from "../views/pages/wellcomePage";
import Rutasss from "../views/sides/components/rutasprueba";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/home/*" element={<HomeRoutes />} />
          <Route path="/welcome" element={<WellcomePage />} />
          <Route path="/welcome/info" element={<InitialInfoPage />} />
          <Route path="/rutas" element={<Rutasss />} />
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
