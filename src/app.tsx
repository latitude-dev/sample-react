import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { LatitudeProvider, defineCustomElements } from '@latitude-data/react'
import { routeTree } from './routeTree.gen'

import './index.css'
import '@latitude-data/react/styles.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

defineCustomElements(window)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LatitudeProvider
      apiConfig={{
        host: 'https://sample-netflix-north-katarina.latitude.page',
      }}
    >
      <RouterProvider router={router} />
    </LatitudeProvider>
  </React.StrictMode>,
)
