import { NavLink } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-col justify-around border-4 border-solid rounded-md h-[800px] w-[480px]">
      <div className="p-6">
        <h2 className="text-2xl"> Settings</h2>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-around">
            <div className="text-lg flex justify-center items-center border-4 border-solid border-slate-500 rounded-md w-52 h-40 ">
              <h3>Account</h3>
            </div>
            <div className="text-lg flex justify-center items-center border-4 border-solid border-slate-500 rounded-md w-52 h-40">
              <h3>Privacy</h3>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div className="text-lg flex justify-center items-center border-4 border-solid border-slate-500 rounded-md w-52 h-40">
              <h3>Notifications</h3>
            </div>
            <div className="text-lg flex justify-center items-center border-4 border-solid border-slate-500 rounded-md w-52 h-40">
              <h3>Devices</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to="/landing"
          className="border-4 border-solid border-blue-500 px-20 py-7"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Settings;
