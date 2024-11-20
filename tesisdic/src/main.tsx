import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Home from './main/learn/Home.tsx'
import Page from './lesson/Page.tsx'
import Juramento from './juramento/Page.tsx'
import Leer from './leer/Page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/learn',
    element: <Home />,
  },
  {
    path: '/lesson/:category', // Ruta dinámica para las lecciones
    element: <Page />, // Usaremos el parámetro :category en Page.tsx
  },
  {
    path: '/juramento',
    element: <Juramento />,
  },
  {
    path: '/leer',
    element: <Leer />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
