import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonComponent({ onClick, variant, disabled, title }) {
  const cls = ['button-component']

  return (
    <Button
      className={cls.join(' ')}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {title}
    </Button>
  )
}

export default ButtonComponent
