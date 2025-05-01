import {createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Components/Header/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:"login",
        Component: Login
      }
    ]
  },
]);