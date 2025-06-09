import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Explore } from './Pages/ExplorePlus/Explore.jsx';
import { Login } from './Pages/Login/Login.jsx';
import { AddJobs } from './Pages/AddJobs/AddJobs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "/explore",
    element: <Explore/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/addjobs",
    element: <AddJobs/>,
  },


]);

createRoot(document.getElementById('root')).render(
<StrictMode> 
    <RouterProvider router={router} />
 </StrictMode>,
)
