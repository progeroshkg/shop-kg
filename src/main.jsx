import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Favourites from './Components/Pages/Favourites/Favourites';
import Login from './Components/Pages/Login/Login';
import PhoneDetails from './Components/Pages/Phones/PhoneDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('phones.json')
      },
      {
        path: "/phone/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch(`../public/phones.json`)
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>
      },
      {
        path: "/login",
        element: <Login></Login>

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
