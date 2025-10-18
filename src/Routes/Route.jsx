import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout
  },
]);