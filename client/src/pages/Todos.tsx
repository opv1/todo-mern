import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import {
  SelectComponent,
  LoaderComponent,
  TodosComponent,
} from 'components/index'

const Todos: React.FC = () => {
  const { loading } = useTypeSelector((state) => state.app)

  return (
    <div className='d-flex justify-content-around align-items-center flex-column'>
      <SelectComponent />
      {loading ? <LoaderComponent /> : <TodosComponent />}
    </div>
  )
}

export default Todos
