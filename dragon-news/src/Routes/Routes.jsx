import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import Category from "../Pages/Category";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/data.json/news.json"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Category></Category>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    loader: () => fetch("/data.json/news.json"),
    hydrateFallbackElement: <Loader></Loader>,
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
