import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import { MainLayout } from '../../layouts/mainLayout'
import { Login } from '../../auth/components/login'
import { LoginPage } from '../../pages/loginPage'
import { ToastContainer } from 'react-toastify'
import { RegisterPage } from '../../pages/registerPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <MainLayout>
        <RegisterPage />
        <ToastContainer />
      </MainLayout>
    </>
  </StrictMode>,
)