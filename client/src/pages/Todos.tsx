import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import {
  SelectComponent,
  LoaderComponent,
  TodosComponent,
} from 'components/index'

const Todos: React.FC = () => {
  const { loading } = useTypeSelector((state) => state.app)
  const { todos } = useTypeSelector((state) => state.todo)

  return (
    <div className='d-flex justify-content-around align-items-center flex-column'>
      {todos.length !== 0 ? <SelectComponent /> : null}
      {loading ? <LoaderComponent /> : <TodosComponent />}
    </div>
  )
}

export default Todos
