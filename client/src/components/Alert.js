import React, { useContext, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'

function AlertComponent() {
  const { message, showMessage, displayMessage } = useContext(AppContext)

  const onCloseAlet = () => {
    displayMessage(false)
  }

  useEffect(() => {
    clearTimeout(window.timeoutId)

    window.timeoutId = setTimeout(() => onCloseAlet(), 3000)
    // eslint-disable-next-line
  }, [showMessage])

  return (
    <Alert
      className='alert-component'
      onClose={onCloseAlet}
      show={showMessage}
      variant={message && message.type === 'error' ? 'danger' : 'success'}
      dismissible
    >
      {message && message.msg}
    </Alert>
  )
}

export default AlertComponent
