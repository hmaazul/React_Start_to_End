import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])
  const [filter, SetFilter] = useState('all')
  const [search, SetSearch] = useState('')

  const addTodo = (todo) => {
    setTodos( (prev) => ([{id: Date.now() ,...todo}, ...prev]))
  }

  const updateTodo = (id,todo) => {
    setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id? todo: prevTodo) ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter( (prevTodo) => prevTodo.id !== id ))
  }

  const toggleTodo = (id) => {
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo ))
  }
  

  useEffect( ()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0)
    {
      setTodos(todos)
    }
    
  }, [])

  useEffect( ()=> {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  //Filtering according to filter results
  const filteredTodos = todos.filter( (prev) => {
    if(filter == 'completed') return prev.completed
    else if ( filter == 'active') return !prev.completed

    return prev;
  })
  .filter( (prev) => prev.todo.toLowerCase().includes(search.toLowerCase()) );


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <div className='flex justify-end items-end '>
                          {/* Search Section */}
                              <input
                              type='text'
                              value={search}
                              placeholder='Search Todos..'
                              onChange={(e) => SetSearch(e.target.value)}
                              className='bg-white text-black rounded-lg px-2  text-lg mr-16'
                              ></input>

                            <label htmlFor='All' className='mr-2 text-lg'> 
                            <input type='radio' name='filter' checked={filter === 'all'} onChange={() => SetFilter('all')} id='All'></input> 
                            All
                        </label>
                        <label htmlFor='active' className='mr-2 text-lg'> 
                            <input type='radio' name='filter' checked={filter === 'active'} onChange={() => SetFilter('active')} id='active'></input> 
                            Active
                        </label>
                        <label htmlFor='completed' className='mr-2 text-lg'>
                            <input type='radio' name='filter' checked={filter === 'completed'} onChange={() => SetFilter('completed')} id='completed'></input> 
                            Completed
                        </label>

                              

                        </div>
                        
                        {/* <button className='bg-green-400 mr-0.5' onClick={() => SetFilter('all')}>All</button>
                        <button className='bg-green-400 mr-0.5' onClick={() => SetFilter('active')}>Active</button>
                        <button className='bg-green-400 mr-0.5' onClick={() => SetFilter('completed')}>Completed</button> */}
                        {filteredTodos.map( (todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
