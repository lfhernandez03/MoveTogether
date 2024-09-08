import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../views/pages/loginPage";
import RegisterPage from "../../views/pages/registerPage";
import ChangePassPage from "../../views/pages/changePassPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="changePass" element={<ChangePassPage />} />
    </Routes>
  );
};

export default AuthRoutes;
