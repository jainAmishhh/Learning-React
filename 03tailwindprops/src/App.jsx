import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-4xl bg-pink-50 p-3 text-amber-500 rounded-2xl'>Hey!! Amish this side</h1>
      <Card userName="The Anti-pattern"/>
    </div>
  )
}

export default App
