import "i18n";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { router, RouterProvider } from "./providers/router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={ router } />
  </StrictMode>,
)
