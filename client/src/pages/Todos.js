import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { Loader, Items } from '../components/index'

function Todos() {
  const { loading, fetchTodos } = useContext(AppContext)

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return <div className='todos-page'>{loading ? <Loader /> : <Items />}</div>
}

export default Todos
