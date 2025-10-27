import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Salam"}],
    editTodo: null,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {id: nanoid(), text: action.payload}
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        startEditTodo: (state,action) =>{
            const todo = state.todos.find( todo => todo.id === action.payload);
            state.editTodo = todo?  todo: null;
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find( todo => todo.id === id);
            if(todo){
                todo.text = text;
            }
            state.editTodo = null;
        }
    }
})

export const {addTodo,deleteTodo,startEditTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;