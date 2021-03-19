import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'

declare global {
  interface Window {
    timeoutId: any
  }
}

const AlertComponent: React.FC = () => {
  const { alert, data } = useTypeSelector((state) => state.alert)
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
