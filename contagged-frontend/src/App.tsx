import "./index.css";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1>Contagged</h1>
          <p>Connection via NFT</p>
        </div>
        <div>
          <button>Create Account</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
