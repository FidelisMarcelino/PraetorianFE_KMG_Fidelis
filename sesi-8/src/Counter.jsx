import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-2">
        <p>Count: {count}</p>
        <button
          className="text-blue-300 bg-black p-1 font-semibold rounded-0 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Tambah
        </button>

        <button
          className="ml-2 text-yellow-300 bg-black p-1 font-semibold rounded-0 cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          Kurang
        </button>

        <button
          className="ml-2 text-red-300 bg-black p-1 font-semibold rounded-0 cursor-pointer"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
