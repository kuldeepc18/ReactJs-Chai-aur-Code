import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // initial state of the todos
    reducers: {        // redcucers are object which has properties and functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // generates a unique id
                text: action.payload
            }
            state.todos.push(todo); // push the new todo to the todos array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions; // export the actions

export default todoSlice.reducer; // export the reducer to be used in the store
// The reducer will be used in the store to manage the state of the todos