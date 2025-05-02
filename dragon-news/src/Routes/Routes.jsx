import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import Category from "../Pages/Category";

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
        element: <Category></Category>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
