import React from 'react'
import { SidebarComponent, ListComponent } from '../components/index'

function DashboardPage() {
  return (
    <div className='dashboard-page d-flex justify-content-around flex-wrap'>
      <SidebarComponent />
      <ListComponent />
    </div>
  )
}

export default DashboardPage
