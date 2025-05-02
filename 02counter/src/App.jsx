import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  // let counter = 0;
  const [clicks, totalClicks] = useState(0);

  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);

    setCounter(counter + 1);
    totalClicks(clicks + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    totalClicks(clicks + 1);
  }


  


  return (
    <div>
      <h1>Basic Counter</h1>
      <h2>Counter value: {counter} </h2>
      <button
        onClick={addValue}
      >Add value </button> {"  "}
      <button
        onClick={removeValue}
      >Decrease value</button>
      <h2>Total clicks: {clicks} </h2>
    </div>
  )
}

export default App
