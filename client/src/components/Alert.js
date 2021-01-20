import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function AlertComponent() {
  const { showAlert, dataAlert, onShowAlert } = useContext(AppContext)

  let variant = ''

  if (dataAlert.type === 'error') {
    variant = 'danger'
  } else {
    variant = 'primary'
  }

  return (
    <Alert
      show={showAlert}
      variant={variant}
      onClose={() => onShowAlert(false)}
      dismissible
    >
      {dataAlert.text}
    </Alert>
  )
}

export default AlertComponent
