import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../views/pages/loginPage'
import { RegisterPage } from '../../views/pages/registerPage'

const authRoutes = () => {
  <Routes>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
  </Routes>
}

export default authRoutes