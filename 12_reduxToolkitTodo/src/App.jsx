import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'



function App() {
  

  return (
    <>
      <h1 className='text-white justify-center text-center'>React Redux Todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
