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
  ]);


export default router