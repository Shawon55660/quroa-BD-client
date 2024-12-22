import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routers'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Toaster position='top-right' reverseOrder={false}/>
    <RouterProvider router={router}>
        

        </RouterProvider>
   
    </AuthProvider>
   
  </StrictMode>,
)
