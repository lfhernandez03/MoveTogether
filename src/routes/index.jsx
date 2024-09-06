import React from 'react'
import { BrowzerRouter as Router, Route, Routes } from 'react-router-dom'
import authRoutes from './auth/authRoutes'

const appRoutes = () => {
  <Router>
    <Routes>
      <Route path="/" element={< Navigate to="/auth/login" />} />
      <Route path="/auth/*" element={<authRoutes/>} />
    </Routes>
  </Router>
}

export default index