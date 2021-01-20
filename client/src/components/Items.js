import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ItemComponent } from './index'

function ItemsComponent() {
  const { todos, onSelectedTodo } = useContext(AppContext)

  return (
    <div className='items-component d-flex justify-content-around flex-wrap'>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <ItemComponent
            key={todo._id}
            todo={todo}
            onSelectedTodo={onSelectedTodo}
          />
        ))
      ) : (
        <h1>No todos</h1>
      )}
    </div>
  )
}

export default ItemsComponent
