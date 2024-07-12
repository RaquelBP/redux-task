import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const todosSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) =>{
        state.push({ id: state.length + 1, text: action.payload }) //Id para poder borrar la tarea leugo
    },
    deleteTodo: (state, action) =>{
        return state.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer


