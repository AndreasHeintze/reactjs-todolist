import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [editTodoIndex, setEditTodoIndex] = useState(-1)

  function addTodo(todo) {
    const newTodos = [...todos, todo]
    persistData(newTodos)
    setTodos(newTodos)
  }

  function updateTodo(index, todoValue) {
    const newTodos = [...todos]
    newTodos[index] = todoValue
    persistData(newTodos)
    setTodos(newTodos)
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex != index)
    persistData(newTodos)
    setTodos(newTodos)
  }

  function editTodo(index) {
    setEditTodoIndex(index)
  }

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    setTodos(JSON.parse(localTodos).todos)
  }, [])

  return (
    <main>
      <TodoInput todos={todos} addTodo={addTodo} updateTodo={updateTodo} editTodoIndex={editTodoIndex} setEditTodoIndex={setEditTodoIndex}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </main>
  )
}

export default App
