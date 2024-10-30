import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Users from "./Components/Users/Users.jsx";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
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
