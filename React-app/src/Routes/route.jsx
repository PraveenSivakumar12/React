
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import LoginLayout from "../layouts/LoginLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Products";
import Contact from "../pages/Contact";
import LoginForm from "../Login/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />

        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
