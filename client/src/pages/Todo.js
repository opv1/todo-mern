import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Item } from '../components/index'

function Todo() {
  const { selectedTodo } = useContext(AppContext)

  return (
    <div className='todo-page'>
      <Item todo={selectedTodo} />
    </div>
  )
}

export default Todo
