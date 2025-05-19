import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0)

  const addValue = ()=>{
    if(Counter<10)
    {
      setCounter(Counter+1)
    }
    else{
      alert("Can't add more Values")
    }
    
  }
  const removeValue = ()=>{
    if(Counter>0)
    {
      setCounter(Counter-1)
    }
    else{
      alert("You have reached the lowest value! Can't remove more values")
    }
  }

  return (
    <>
      <h1>Counter : {Counter}</h1>
      <br/>
      <button
      onClick={addValue}
      >Add Value : {Counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value: {Counter} </button>
    </>
  )
}

export default App
