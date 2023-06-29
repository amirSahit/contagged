import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

function Collect() {
  return (
    <div className="w-[480px]">
      <div className="screen">
        <h1 className="text-3xl text-blue-700">Your New Contag</h1>
        <div className="flex flex-row justify-center items-center border-solid border-4 border-white w-52 h-52 rounded-full bg-blue-700 shadow-blue-500 shadow-lg text-white">
          <img
            src="../images/giphy.gif"
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label className="text-lg">Email</label>
            <input
              className="border border-solid rounded-md p-2 w-[300px] text-blue-700"
              type="text"
              placeholder="Email"
            />
            <NavLink to="/home" className="loginButton">
              Collect
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="border border-solid rounded-md p-2 w-[300px] bg-white text-blue-700">
            Contact Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collect;
