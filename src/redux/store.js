import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice.js'

//Metemos la configuración en un objeto
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
