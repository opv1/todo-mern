import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { TodoComponent } from './index'

function TodosComponent() {
  const { todos, fetchTodos, onSelectedTodo } = useContext(AppContext)

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div className='items-component d-flex justify-content-around flex-wrap'>
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
