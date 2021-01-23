import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoaderComponent() {
  return (
    <div className='loader-component d-flex justify-content-center'>
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoaderComponent
