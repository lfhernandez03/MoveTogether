import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../views/pages/loginPage";
import RegisterPage from "../../views/pages/registerPage";
import ChangePassPage from "../../views/pages/changePassPage";
import VerificationEmail from "../../views/pages/verificationEmailPage";
import HomePage from "../../views/pages/homePage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="changePass" element={<ChangePassPage />} />
      <Route path="verificationEmail" element={<VerificationEmail />} />
      <Route path="home" element={<HomePage />} />

    </Routes>
  );
};

export default AuthRoutes;
