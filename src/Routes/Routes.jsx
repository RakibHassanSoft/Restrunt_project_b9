import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import Secret from "../pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
          // element:<PrivetRoute><Home></Home></PrivetRoute>
        },{
          path:'/menu',
          element:<Menu></Menu>
       
        },{
          path:'/order/:catogory',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },{
          path:'/secret',
         element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },



        //admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
      ]
    }
    
  ]);