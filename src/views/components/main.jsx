import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import { MainLayout } from '../layouts/mainLayout'
import { Navbar } from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)