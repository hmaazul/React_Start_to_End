import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import BasicCard from './components/BasicCard'

function App() {
  const [count, setCount] = useState(0)
  const name = "Maaz"
  
  return (
    <>
      <h1 className='bg-gray-300 text-green-700 mb-2.5'>Added Tailwind</h1>
      <BasicCard username="Maaz" btnText="Click me"  />
      <BasicCard username="React" btnText={"Read the docs"} />
    </>
  )
}

export default App
