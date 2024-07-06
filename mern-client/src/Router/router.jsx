import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../Components/Signup";
import Login from "../Components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../Components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[{
        path:'/',
        element:<Home />
      },
      {
        path:"/Shop",
        element:<Shop/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Blog",
        element:<Blog/>
      },
      {
        path:"/book/:id",
        element: <SingleBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }

    ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path: '/admin/dashboard',
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path: "/admin/dashboard/Manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)

        }
      ]
    },
    {
      path:"sign-up",
      element: <SignUp />
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);


export default router
