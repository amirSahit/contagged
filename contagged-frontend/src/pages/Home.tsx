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
  const [flip, setFlip] = useState(false);
  return (
    <div className="homeScreen">
      <div>
        <div
          className="flex justify-center h-[250px] w-full bg-gradient-to-b from-blue-100/90 to-blue-300/90"
          onClick={() => setFlip(!flip)}
        >
          <img
            src="../images/giphy.gif"
            className={clsx(
              "rounded-full border-4 border-solid border-blue-700 w-[200px] h-[200px] mx-auto my-4",
              flip ? "hidden" : "visible"
            )}
          />
          <img
            src="../images/qr.png"
            className={clsx(
              "rounded-full border-4 border-solid border-blue-700 w-[200px] h-[200px] mx-auto my-4",
              flip ? "visble" : "hidden"
            )}
          />
        </div>
        <div>
          <div className="flex flex-row justify-around">
            <button
              className={clsx(
                "flex flex-row justify-around items-center w-full h-14",
                window === "privat"
                  ? "bg-blue-300/90"
                  : "bg-blue-700 text-white border-4 border-solid border-white"
              )}
              onClick={() => setWindow("privat")}
            >
              Privat
            </button>
            <button
              className={clsx(
                "flex flex-row justify-around items-center w-full h-14",
                window === "professional"
                  ? "bg-blue-300/90"
                  : "bg-blue-700 text-white bg-blue-700 text-white border-4 border-solid border-white"
              )}
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
