import { NavLink } from "react-router-dom";
import ArrowLeft from "../utils/svg/ArrowLeft";

function Settings() {
  return (
    <div className="flex flex-col justify-around border-4 border-solid rounded-md h-[800px] w-[480px] bg-gradient-to-b from-blue-100/90 to-blue-300/90">
      <div className="p-6">
        <NavLink to="/home" className="flex flex-row">
          <ArrowLeft />
          <p>Back</p>
        </NavLink>

        <h2 className="text-2xl my-5"> Settings</h2>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-around">
            <div className="text-lg flex justify-center items-center border-4 border-solid border-white bg-blue-700 text-white rounded-md w-52 h-40 ">
              <h3>Account</h3>
            </div>
            <div className="text-lg flex justify-center items-center border-4 border-solid border-white bg-blue-700 text-white  rounded-md w-52 h-40">
              <h3>Privacy</h3>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div className="text-lg flex justify-center items-center border-4 border-solid border-white bg-blue-700 text-white rounded-md w-52 h-40">
              <h3>Notifications</h3>
            </div>
            <div className="text-lg flex justify-center items-center border-4 border-solid border-white bg-blue-700 text-white rounded-md w-52 h-40">
              <h3>Devices</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to="/landing"
          className="border-4 border-solid bg-blue-700 px-20 py-7 text-white"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Settings;
