import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-pink-600 bg-pink-300"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-purple-600 bg-purple-400"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-gray-600 bg-gray-400"
          >
            Gray
          </button>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <h2 className="font-bold text-5xl p-4 rounded-2xl shadow-black shadow-2xl">
          Background color is changed to {color}
        </h2>
      </div>
    </div>
  );
}

export default App;
