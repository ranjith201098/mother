import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserDashboard from './LayoutFolders/Dashboard/UserDashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './LayoutFolders/Home';
import About from './LayoutFolders/About';
import Contactus from './LayoutFolders/Contactus';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Harish } from './Harish';
import Details from './LayoutFolders/Details';
import Newform from './LayoutFolders/Newform';
import Cookies from "universal-cookie";
import UserDetails  from './LayoutFolders/UserDetails';
import { RegisterForm } from './LayoutFolders/RegisterForm';
import Sidebar from './Sidebar';
import Practish from './LayoutFolders/Practish';
import Website from './Website';
import Whatsapp from './Whatsapp';
const cookies = new Cookies();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "contacts",
    element: <Sidebar />,
    children: [
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path:"harish",
        element:<Harish/>
      },
      {
        path:"newform",
        element:<Newform/>
      },
      {
        path:"userdetails",
        element:<UserDetails/>
      },
      {
        path:"registerform",
        element:<RegisterForm/>
      },
      {
        path:"practish",
        element:<Practish/>
      },
      {
        path:"website",
        element:<Website/>
      },
      {
        path:"whatsapp",
        element:<Whatsapp/>
      },
    ],
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
