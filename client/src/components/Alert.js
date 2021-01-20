import React, { useContext, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function AlertComponent() {
  const { message, showMessage, displayMessage } = useContext(AppContext)

  let variant = ''

  if (message) {
    if (message.type === 'error') {
      variant = 'danger'
    } else if (message.type === 'success') {
      variant = 'success'
    }
  }

  useEffect(() => {
    clearTimeout(window.idTimeout)

    window.idTimeout = setTimeout(() => displayMessage(false), 3000)
  }, [showMessage, displayMessage])

  return (
    <Alert
      className='alert-component'
      onClose={() => displayMessage(false)}
      show={showMessage}
      variant={variant}
      dismissible
    >
      {message && message.msg}
    </Alert>
  )
}

export default AlertComponent
