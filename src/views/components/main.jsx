import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import logo from '/src/assets/images/movetogether.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="titulo">
      <h1 className='text-3xl font-bold underline flex justify-center'>Hola mundo</h1>
    </div>
    <div className="imagen">
      <img src={logo} alt="Logo" className='flex justify-center '/>
    </div>
  </StrictMode>,
)