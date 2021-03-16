import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'

const AlertComponent = () => {
  const { alert, data } = useSelector((state) => state.alert)
  const { onCloseAlert } = useActions()

  useEffect(() => {
    clearTimeout(window.timeoutId)

    window.timeoutId = setTimeout(() => onCloseAlert(), 3000)
    // eslint-disable-next-line
  }, [alert])

  return (
    <Alert
      onClose={onCloseAlert}
      show={alert}
      variant={data.type === 'error' ? 'danger' : 'success'}
      dismissible={true}
    >
      {data.text}
    </Alert>
  )
}

export default AlertComponent
