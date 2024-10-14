import { useState, useEffect } from "react"

export default function TodoInput(props) {
  const {todos, addTodo, updateTodo, editTodoIndex, setEditTodoIndex} = props
  const [todoValue, setTodoValue] = useState('')

  useEffect(() => {
    setTodoValue(editTodoIndex > -1 ? todos[editTodoIndex] : '')

    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [editTodoIndex])

  function handleKeyUp(e) {
    if (e.code === 'Escape') {
      setTodoValue('')
      setEditTodoIndex(-1)
    }
  }

  function inputChange(e) {
    setTodoValue(e.target.value)
    if (editTodoIndex < 0) {
      return
    }
    updateTodo(editTodoIndex, e.target.value)
  }

  function handleAddTodo(e) {
    if (e?.code !== 'Enter') {
      return
    }
    if (!todoValue || editTodoIndex != -1) {
      return
    }
    addTodo(todoValue)
    setTodoValue('')
  }

  return (
    <header>
      <input value={todoValue} onKeyUp={handleAddTodo} onChange={inputChange} placeholder="Enter todo..."/>
      <button onClick={handleAddTodo}>Add</button>
    </header>
  )
}