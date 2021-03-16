import React from 'react'
import { useSelector } from 'react-redux'
import {
  SelectComponent,
  LoaderComponent,
  TodosComponent,
} from 'components/index'

const Todos = () => {
  const { loading } = useSelector((state) => state.app)

  return (
    <div className='d-flex justify-content-around align-items-center flex-column'>
      <SelectComponent />
      {loading ? <LoaderComponent /> : <TodosComponent />}
    </div>
  )
}

export default Todos
