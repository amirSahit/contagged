import { NavLink } from "react-router-dom";
import MyCollection from "../../utils/svg/MyCollection";
import Search from "../../utils/svg/Search";
import Setting from "../../utils/svg/Setting";

function Footer() {
  return (
    <footer className="flex flex-row justify-around p-2 bg-blue-700">
      <NavLink to="/home" className="flex flex-col justify-center items-center">
        <MyCollection />
        <p className="text-xs text-white">My Collection</p>
      </NavLink>
      <NavLink to="/home" className="flex flex-col justify-center items-center">
        <Search />
        <p className="text-xs text-white">Search</p>
      </NavLink>
      <NavLink
        to="/settings"
        className="flex flex-col justify-center items-center"
      >
        <Setting />
        <p className="text-xs text-white">Settings</p>
      </NavLink>
    </footer>
  );
}

export default Footer;
