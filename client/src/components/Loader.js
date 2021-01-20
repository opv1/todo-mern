import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoaderComponent() {
  return (
    <Spinner
      className='loader-component d-flex justify-content-center align-items-center'
      animation='border'
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default LoaderComponent
