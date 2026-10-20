
import { Outlet, useNavigate } from "react-router-dom";

export default function LoginLayout() {
  const navigate = useNavigate();

  function closeLogin() {
    navigate("/", { replace: true });
  }

  return (
    <div
      className="modal-overlay"
      onClick={closeLogin}
    >
      <div
        className="login-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-btn"
          onClick={closeLogin}
          aria-label="Close login"
        >
          &times;
        </button>

        <Outlet />
      </div>
    </div>
  );
}
