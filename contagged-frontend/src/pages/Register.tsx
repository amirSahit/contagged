import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
  const [logo, setLogo] = useState(1);

  setTimeout(() => {
    if (logo === 1) setLogo(2);
    else setLogo(1);
  }, 5000);

  return (
    <div className="w-[480px]">
      <div className="screen">
        <div className="flex flex-row justify-center items-center border-solid border-4 border-white w-52 h-52 rounded-full bg-blue-700 shadow-blue-500 shadow-lg text-white">
          <img
            src="../images/qr.png"
            className={clsx(
              "object-cover rounded-full",
              logo === 2 ? "visible" : "hidden"
            )}
          />
          <h1
            className={clsx(
              "text-4xl font-bold",
              logo === 1 ? "visible" : "hidden"
            )}
          >
            Contagged
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-lg">Email</label>
            <input
              className="border border-solid rounded-md p-2 w-[300px] text-blue-700"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg">Password</label>
            <input
              className="border border-solid rounded-md p-2 w-[300px] text-blue-700"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg">Confirm Password</label>
            <input
              className="border border-solid rounded-md p-2 w-[300px] text-blue-700"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <NavLink to="/home" className="loginButton">
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default Register;
