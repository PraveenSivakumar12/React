
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <div className="site-layout">
      <header className="navbar">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>

          <button
            type="button"
            onClick={() => navigate("login")}
          >
            Login
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
