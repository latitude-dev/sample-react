import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { LatitudeProvider, defineCustomElements } from '@latitude-data/react'

import { routeTree } from './routeTree.gen'
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

defineCustomElements(window)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LatitudeProvider apiConfig={{ host: import.meta.env.VITE_LATITUDE_HOST }}>
      <RouterProvider router={router} />
    </LatitudeProvider>
  </React.StrictMode>,
)