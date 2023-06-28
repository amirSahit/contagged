import { NavLink } from "react-router-dom";
import Setting from "../utils/svg/Setting";
import Search from "../utils/svg/Search";
import MyCollection from "../utils/svg/MyCollection";
import Footer from "../components/shared/Footer";
import Private from "../components/home/Private";
import Professional from "../components/home/Professional";
import { useState } from "react";
import clsx from "clsx";

function Home() {
  const [window, setWindow] = useState("privat");
  return (
    <div className="w-[480px]">
      <div className="homeScreen">
        <div className="h-[250px] w-full border-4 border-solid text-center">
          <img
            src="../images/giphy.gif"
            className="border-4 border-solid rounded-full w-[200px] h-[200px] mx-auto my-4"
          />
        </div>
        <div>
          <div className="flex flex-row justify-around">
            <button
              className="flex flex-row justify-around w-full border-4 border-solid"
              onClick={() => setWindow("privat")}
            >
              Privat
            </button>
            <button
              className="flex flex-row justify-around w-full border-4 border-solid"
              onClick={() => setWindow("professional")}
            >
              Professional
            </button>
          </div>
          <div className={clsx(window === "privat" ? "visible" : "hidden")}>
            <Private />
          </div>
          <div
            className={clsx(window === "professional" ? "visible" : "hidden")}
          >
            <Professional />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
