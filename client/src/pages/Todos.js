import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { LoaderComponent, ItemsComponent } from '../components/index'

function Todos() {
  const { loading } = useContext(AppContext)

  return (
    <div className='d-flex justify-content-around'>
      <ItemsComponent />
    </div>
  )
}

export default Todos
