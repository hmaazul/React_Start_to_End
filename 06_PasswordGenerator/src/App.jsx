import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactedAllowed, setCharacterAllowed] = useState(false)

  // for reference of password- increase interactivity by highlighting the 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charactedAllowed) str += "~!@#$%^&*()<>?{}"

    for (let i = 0; i < length; i++) {
      let charAt = Math.floor(Math.random() * str.length + 1 )
      pass += str[charAt]
    }

    setPassword(pass);
    
  }, [length,numberAllowed,charactedAllowed,setPassword])

  const copyToClipBoard = useCallback( ()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password.slice(0,10))
  }, [password])
  
  useEffect( ()=> {
    passwordGenerator()
  }, [length,numberAllowed,charactedAllowed, passwordGenerator])

  return (
    <>
      <div 
      className='w-full max-w-lvh items-center bg-gray-800 justify-center mx-auto pt-4 pb-6
      mt-8 text-yellow-200'>
      <h1 className='text-center text-2xl mb-4'>Random Password Generator</h1>
      
      <div
      className='flex flex-wrap mb-4 items-center justify-center'
      >
        <input
        className='bg-white w-3/4 py-2 px-4 rounded-l-xl text-gray-900'
        type='text'
        value={password}
        ref={passwordRef}
        ></input>

        <button
        className='bg-blue-700 py-2 px-4 rounded-r-xl cursor-pointer'
        onClick={copyToClipBoard}
        >Copy</button>
      </div>

      <div className='flex text-md gap-x-4 justify-center mb-6'>
        <div
        className='flex items-center gap-x-2'
        >
          <input
          className='cursor-pointer'
          type='range'
          min={6}
          max={25}
          value={length}
          onChange={ (e)=> {setLength(e.target.value)}}
          ></input>
          <label>Length : {length}</label>

        </div>

        <div
        className='flex items-center gap-x-2'
        >
          <input
          className='cursor-pointer'
          type='checkbox'
          defaultChecked={numberAllowed}
          onChange={ ()=> {
            setNumberAllowed((prev) => !prev)
          }}
          ></input>
          <label>Number</label>
        </div>

        <div
        className='flex items-center gap-x-2'
        >
          <input
          className='cursor-pointer'
          type='checkbox'
          defaultChecked={charactedAllowed}
          onChange={ ()=> {
            setCharacterAllowed((prev) => !prev)
          }}
          ></input>
          <label>Character</label>
        </div>

      </div>
      
          <footer
          className='text-center'
          >Copyright © 2025 by hmaazul</footer>
      </div>
      
    </>
  )
}

export default App
