import React from 'react'
import { useSelector } from 'react-redux'
import { TodoComponent } from 'components/index'

const Todo = () => {
  const { selectedTodo } = useSelector((state) => state.todo)

  return (
    <div className='d-flex justify-content-center '>
      <TodoComponent todo={selectedTodo} />
    </div>
  )
}

export default Todo
