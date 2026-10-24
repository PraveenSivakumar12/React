import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import LoginLayout from "../layouts/LoginLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Products";
import Contact from "../pages/Contact";
import LoginForm from "../Login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        element: <LoginLayout />,
        children: [
          {
            path: "login",
            element: <LoginForm />
          }
        ]
      }
    ]
  }
]);

export default router;