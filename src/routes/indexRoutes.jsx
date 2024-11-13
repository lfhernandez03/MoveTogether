import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRoutes from "../routes/auth/authRoutes"; // Ejemplo de otra ruta global
import MainLayout from "../views/layouts/mainLayout";
import LoginPage from "../views/pages/loginPage";
import HomeRoutes from "./home/homeRoutes";
import HomePage from "../views/pages/homePage";
import UserProfile from "../views/sides/components/profile";
import { WellcomePage, InitialInfoPage } from "../views/pages/wellcomePage";
import ChatPage from "../views/pages/chatPage";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/home/*" element={<HomeRoutes />} />
          <Route path="/welcome" element={<WellcomePage />} />
          <Route path="/welcome/info" element={<InitialInfoPage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route index element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
