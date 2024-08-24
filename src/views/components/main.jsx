import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import { MainLayout } from '../layouts/mainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout 
      
    />
  </StrictMode>,
)