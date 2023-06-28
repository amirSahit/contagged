function Private() {
  return (
    <div className="h-[310px]">
      <div className="privateScreen">
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-lg">Platinum</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/cat.gif"
              className="border-4 border-solid border-blue-600 rounded-full w-[90px] h-[90px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-lg">Gold</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/space-odyssey.jpeg"
              className="border-4 border-solid border-yellow-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/teletubbies.jpeg"
              className="border-4 border-solid border-yellow-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/goku-original.webp"
              className="border-4 border-solid border-yellow-500 rounded-full w-[90px] h-[90px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-lg">Silver</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/tisch.jpeg"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/lWeOGK.gif"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/clip.webp"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/tootpaste.jpeg"
              className="border-4 border-solid border-slate-500 rounded-full w-[90px] h-[90px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-lg">Bronze</h3>
          <div className="flex flex-row gap-2">
            <img
              src="../images/alison.webp"
              className="border-4 border-solid border-orange-900 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/dino.png"
              className="border-4 border-solid border-orange-900 rounded-full w-[90px] h-[90px]"
            />
            <img
              src="../images/pizza.gif"
              className="border-4 border-solid  border-orange-900 rounded-full w-[90px] h-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private;
