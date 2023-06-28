import { NavLink } from "react-router-dom";
import MyCollection from "../../utils/svg/MyCollection";
import Search from "../../utils/svg/Search";
import Setting from "../../utils/svg/Setting";

function Footer() {
  return (
    <footer className="border-4 border-solid flex flex-row justify-around p-2">
      <NavLink to="/home" className="flex flex-col justify-center items-center">
        <MyCollection />
        My Collection
      </NavLink>
      <NavLink to="/home" className="flex flex-col justify-center items-center">
        <Search />
        Search
      </NavLink>
      <NavLink
        to="/settings"
        className="flex flex-col justify-center items-center"
      >
        <Setting />
        Settings
      </NavLink>
    </footer>
  );
}

export default Footer;
