import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthRoutes from '../routes/auth/authRoutes';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/" element={<AuthRoutes />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;