import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "~!@#$%^&*()_+-=/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto my-[32vh] rounded-lg px-4 py-3 bg-violet-500 shadow-2xl shadow-black text-fuchsia-900">
      <h2 className="text-blue-950 text-center font-bold text-3xl my-3">
        Password Generator
      </h2>

      <div className="flex bg-pink-100 shadow-2xl shadow-black rounded-lg overflow-hidden mb-4">
        <input
          type=""
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
          {copied && (
            <div className="fixed top-5 right-165 bg-green-500 text-white text-center px-4 py-2 rounded-4xl shadow-lg transition-opacity duration-300 z-50">
              <span className="text-sm text-white bg-white rounded-full text-center">✔</span> Password copied!
            </div>
          )}
        </button>
      </div>

      <div className="flex justify-evenly justify- text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name="number"
            id="number"
          />
          <label htmlFor="number"> Number </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name="character"
            id="character"
          />
          <label htmlFor="character"> Character </label>
        </div>
      </div>
    </div>
  );
}

export default App;
