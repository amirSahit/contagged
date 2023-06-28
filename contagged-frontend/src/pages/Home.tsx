function Home() {
  return (
    <div className="w-[480px]">
      <div className="screen">
        <div className="h-[250px] w-full border-4 border-solid text-center">
          <img
            src="../images/giphy.gif"
            className="border-4 border-solid rounded-full w-[200px] h-[200px] mx-auto my-4"
          />
        </div>
        <div>
          <div>
            <button></button>
          </div>
          <div>
            <h2>Events</h2>
            <div>
              <h3>MACHN Hackathon</h3>
              <div className="flex flex-row gap-2">
                <img
                  src="../images/cat.gif"
                  className="border-4 border-solid rounded-full w-[90px] h-[90px] mx-auto my-4"
                />
                <img
                  src="../images/space-odyssey.jpeg"
                  className="border-4 border-solid rounded-full w-[90px] h-[90px] mx-auto my-4"
                />
                <img
                  src="../images/teletubbies.jpeg"
                  className="border-4 border-solid rounded-full w-[90px] h-[90px] mx-auto my-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
