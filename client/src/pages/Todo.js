import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TodoComponent } from '../components/index'

function TodoPage() {
  const { selectedTodo } = useContext(AppContext)

  return (
    <div className='todo-page d-flex justify-content-center '>
      <TodoComponent todo={selectedTodo} />
    </div>
  )
}

export default TodoPage
