import React from 'react'
import { AuthComponent } from '../components/index'

function Auth() {
  return (
    <div className='auth-page d-flex justify-content-center align-items-center flex-column h-100'>
      <h1>Todo MERN</h1>
      <AuthComponent />
    </div>
  )
}

export default Auth
