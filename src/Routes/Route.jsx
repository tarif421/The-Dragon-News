import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import home from "../pages/home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path:"",
        Component: home
      },
      {
        path:"/category/:id",
        Component: CategoryNews
      }
    ]
  },
]);
