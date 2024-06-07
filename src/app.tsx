import ReactDOM from 'react-dom'
import { RouterProvider } from "react-router-dom"
import { LatitudeProvider, defineCustomElements } from '@latitude-data/react'

import './index.css'
import '@latitude-data/react/styles.css'
import routes from './routes'
import React from 'react'

defineCustomElements(window)

function App() {
  // @ts-expect-error - Types
  return <RouterProvider router={routes} />
}

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

ReactDOM.render(
  <LatitudeProvider
    apiConfig={{
      host: 'https://sample-netflix-north-katarina.latitude.page',
    }}
  >
    <App />
  </LatitudeProvider>,
  root
)
