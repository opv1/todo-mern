import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { TodoComponent } from 'components/index'
import { TodoType } from 'store/types/todo'

const TodosComponent: React.FC = () => {
  const { todos } = useTypeSelector((state) => state.todo)
  const { onSelectTodo } = useActions()

  return (
    <div className='todos-component d-flex justify-content-around flex-wrap'>
      {todos.length !== 0 ? (
        todos.map((todo: TodoType) => (
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
