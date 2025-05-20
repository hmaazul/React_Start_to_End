import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("var(--color-red-300)")

  return (
    <>
    <div
    className="w-full h-screen flex justify-center"
    style={{backgroundColor: color}}
    >
      <div
      className="fixed flex flex-wrap justify-center items-center gap-2 bottom-12
       bg-white rounded px-4 py-2"
      >
        
        <button
        className="bg-red-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-red-600)")}
        >Red</button>
        <button
        className="bg-blue-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-blue-600)")}
        >Blue</button>
        <button
        className="bg-green-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-green-600)")}
        >Green</button>
        <button
        className="bg-purple-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-purple-600)")}
        >Purple</button>
        <button
        className="bg-pink-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-pink-600)")}
        >Pink</button>
        <button
        className="bg-yellow-600 px-1.5 py-1 rounded flex flex-wrap"
        onClick={() => setColor("var(--color-yellow-600)")}
        >Yellow</button>
      </div>

    </div>
    </>
  )
}

export default App
