import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../../index.css'
import MainRoutes from '../../../routes/indexRoutes'
import MakePost from '../../posts/components/makePost'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MakePost />
  </StrictMode>
)