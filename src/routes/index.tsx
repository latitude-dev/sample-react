import { createBrowserRouter } from "react-router-dom"
import Layout from './Layout'
import Home from "@/routes/Home"
import UseQuery from "@/examples/UseQuery"
import Embedding from "@/examples/Embedding"
import NativeComponents from "@/examples/NativeComponents"

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/useQuery',
        element: <UseQuery />
      },
      {
        path: '/embedding',
        element: <Embedding />
      },
      {
        path: '/native',
        element: <NativeComponents />
      }
    ]
  }
])
