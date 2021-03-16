import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from 'hooks/useActions'
import { TodoComponent } from 'components/index'

const TodosComponent = () => {
  const { todos } = useSelector((state) => state.todo)
  const { onSelectTodo } = useActions()

  return (
    <div className='todos-component d-flex justify-content-around flex-wrap'>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoComponent
            key={todo._id}
            todo={todo}
            onSelectTodo={onSelectTodo}
          />
        ))
      ) : (
        <h1>No todos</h1>
      )}
    </div>
  )
}

export default TodosComponent
