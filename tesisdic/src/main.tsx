import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Home from './main/learn/Home.tsx'
import Page from './lesson/Page.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
},
{
  path:'/learn',
  element: <Home></Home>,
},
{
  path:'/lesson',
  element: <Page></Page>,
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
