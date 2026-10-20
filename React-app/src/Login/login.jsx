
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      alert("Login successful!");

      navigate("/");    
    }
  }

  return (
    <div className="login-form-content">
      <h2>Welcome Back!</h2>
      <p>Enter your details to access your account.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" name="remember" />
            Remember me
          </label>

          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
