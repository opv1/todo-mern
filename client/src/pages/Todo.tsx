import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { TodoComponent } from 'components/index'

const Todo: React.FC = () => {
  const { selectedTodo } = useTypeSelector((state) => state.todo)

  return (
    <div className='d-flex justify-content-center '>
      <TodoComponent todo={selectedTodo} />
    </div>
  )
}

export default Todo
