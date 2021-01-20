import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { LoaderComponent, ItemsComponent } from '../components/index'

function Todos() {
  const { loading } = useContext(AppContext)

  return (
    <div className='todos-page'>
      {loading ? <LoaderComponent /> : <ItemsComponent />}
    </div>
  )
}

export default Todos
