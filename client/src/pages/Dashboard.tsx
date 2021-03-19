import React from 'react'
import { SidebarComponent, ListComponent } from 'components/index'

const Dashboard: React.FC = () => {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      <SidebarComponent />
      <ListComponent />
    </div>
  )
}

export default Dashboard
