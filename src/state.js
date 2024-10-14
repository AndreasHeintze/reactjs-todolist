import { useState } from "react"

export const [todos, setTodos] = useState([])
export const [editTodoIndex, setEditTodoIndex] = useState(-1)

export function addTodo(todo) {
  setTodos([...todos, todo])
}

export function updateTodo(index, todoValue) {
  const newTodos = [...todos]
  newTodos[index] = todoValue
  setTodos(newTodos)
}

export function deleteTodo(index) {
  const newTodos = todos.filter((todo, todoIndex) => todoIndex != index)
  setTodos(newTodos)
}

export function editTodo(index) {
  setEditTodoIndex(index)
}
