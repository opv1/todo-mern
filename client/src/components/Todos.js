import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TodoComponent } from './index'

function TodosComponent() {
  const { todos, onSelectedTodo } = useContext(AppContext)

  return (
    <div className='todos-component d-flex justify-content-around flex-wrap'>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoComponent
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

export default TodosComponent
