import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Item } from './index'

function Items() {
  const { todos } = useContext(AppContext)

  return (
    <div className='items-component d-flex justify-content-around flex-wrap'>
      {todos.length !== 0 ? (
        todos.map((todo) => <Item key={todo._id} todo={todo} />)
      ) : (
        <h1>No todos</h1>
      )}
    </div>
  )
}

export default Items
