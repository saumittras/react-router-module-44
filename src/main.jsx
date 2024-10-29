import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Home/Header.jsx";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "header",
    element: <Header></Header>,
  },
  {
    path: "/about",
    element: <div>I am from the about page</div>,
  },
  {
    path: "/contact",
    element: <div>Call Me right now</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
