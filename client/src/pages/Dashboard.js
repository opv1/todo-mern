import React from 'react'
import { SidebarComponent, ListComponent } from '../components/index'

function Dashboard() {
  return (
    <div className='d-flex'>
      <SidebarComponent />
      <ListComponent />
    </div>
  )
}

export default Dashboard
