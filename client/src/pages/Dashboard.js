import React from 'react'
import { SidebarComponent, ListComponent } from '../components/index'

function DashboardPage() {
  return (
    <div className='dashboard-page d-flex'>
      <SidebarComponent />
      <ListComponent />
    </div>
  )
}

export default DashboardPage
