import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ItemComponent } from '../components/index'

function Todo() {
  const { selectedTodo } = useContext(AppContext)

  return (
    <div className='todo-page d-flex justify-content-center '>
      <ItemComponent todo={selectedTodo} />
    </div>
  )
}

export default Todo
