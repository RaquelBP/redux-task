import './App.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './redux/todosSlice.js'

function App() {
  const [inputValue, setInputValue] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const executeAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const executeDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <h1>Tareas</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={executeAddTodo}>Agregar Tarea</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => executeDeleteTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
