import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="w-[480px]">
      <div className="screen">
        <h1 className="text-5xl font-bold">Contagged</h1>
        <div className="flex flex-col gap-4">
          <input
            className="border border-solid rounded-md p-2 w-[300px]"
            type="text"
            placeholder="Email"
          />
          <input
            className="border border-solid rounded-md p-2 w-[300px]"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="loginButton">
          <NavLink to="/home">Login</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Login;
