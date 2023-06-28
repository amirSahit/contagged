import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="w-[480px]">
      <div className="screen">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-5xl font-bold">Contagged</h1>
          <p>Unleash connections, seamlessly</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="loginButton">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="registrationButton">
            <NavLink to="/register">Create Account</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
