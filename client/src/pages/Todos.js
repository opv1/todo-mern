import React, { useContext } from 'react'
import { AppContext } from 'context/AppContext'
import {
  SelectComponent,
  LoaderComponent,
  TodosComponent,
} from 'components/index'

function Todos() {
  const { loading } = useContext(AppContext)

  return (
    <div className='todos-pages d-flex justify-content-around align-items-center flex-column'>
      <SelectComponent />
      {loading ? <LoaderComponent /> : <TodosComponent />}
    </div>
  )
}

export default Todos
