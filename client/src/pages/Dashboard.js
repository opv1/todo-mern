import React from 'react'
import { Sidebar, List } from '../components/index'

function Dashboard() {
  return (
    <div className='dashboard-page d-flex'>
      <Sidebar />
      <List />
    </div>
  )
}

export default Dashboard
