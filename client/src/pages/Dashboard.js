import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { SidebarComponent, ListComponent } from '../components/index'

function Dashboard() {
  const { fetchLists, fetchTodos } = useContext(AppContext)

  useEffect(() => {
    fetchLists()
    fetchTodos()
  }, [fetchLists, fetchTodos])

  return (
    <div className='dashboard-page d-flex'>
      <SidebarComponent />
      <ListComponent />
    </div>
  )
}

export default Dashboard
