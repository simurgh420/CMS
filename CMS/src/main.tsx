import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {routes} from './routes.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ThemeProvider } from './components/ThemeProvider'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
  <StrictMode>

      <RouterProvider router={router}/>
    </StrictMode>,
    </ThemeProvider>
)
