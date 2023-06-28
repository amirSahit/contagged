import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const [logo, setLogo] = useState(1);

  setTimeout(() => {
    if (logo === 1) setLogo(2);
    else setLogo(1);
  }, 3000);
  return (
    <div className="w-[480px]">
      <div className="screen">
        <div className="flex flex-col justify-center items-center gap-2">
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
          <p className="text-2xl mt-4">Unleash connections,</p>
          <p className="text-2xl">seamlessly</p>
        </div>
        <div className="flex flex-col gap-2">
          <NavLink to="/login" className="loginButton">
            Login
          </NavLink>
          <button className="registrationButton">
            <NavLink to="/register">Create Account</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
