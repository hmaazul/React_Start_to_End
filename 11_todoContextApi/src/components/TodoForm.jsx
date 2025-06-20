import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, SetTodo] = useState("")
    const  {addTodo} = useTodo()

    const OnSubmit = (e) => {
        e.preventDefault()

        if(todo){
            console.log(todo)
            addTodo({todo: todo ,completed: false})
            SetTodo("")
            console.log("completed")

        }
        else return
        
    }

    return (
        <form onSubmit={OnSubmit} className="flex">
            <input
                id='todoMsg'
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => SetTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

