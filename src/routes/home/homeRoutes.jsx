import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../views/pages/homePage'

const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="home" element={<HomePage />} />
        
        
    </Routes>
  )
}

export default HomeRoutes