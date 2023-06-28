import Plus from "../../utils/svg/Plus";

function Professional() {
  return (
    <div className="h-[310px]">
      <div className="privateScreen">
        <h2 className="text-2xl">Companies</h2>
        <div className="flex flex-col gap-2 p-2">
          <h3>Company A</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/tisch.jpeg"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/lWeOGK.gif"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h3>Company B</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/dino.png"
              className="border-4 border-solid border-orange-900 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/goku-original.webp"
              className="border-4 border-solid border-yellow-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/cat.gif"
              className="border-4 border-solid border-blue-600 rounded-full w-[90px] h-[90px]"
            />
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h3>Company C</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/pizza.gif"
              className="border-4 border-solid  border-orange-900 rounded-full w-[90px] h-[90px]"
            />
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
            <div className="flex flex-col justify-center items-center border-4 border-solid border-slate-300 rounded-full w-[90px] h-[90px] text-5xl">
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;
