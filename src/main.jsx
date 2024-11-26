import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Update from './Components/Update';
import Put from './Components/Put';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/users",
    element:<Update></Update>,
    loader:()=> fetch('http://localhost:5000/users')
  },
  {
    path:"/put/:id",
    element:<Put></Put>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
