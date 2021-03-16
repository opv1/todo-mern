import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonComponent({ onClick, variant, disabled, title }) {
  return (
    <Button onClick={onClick} variant={variant} disabled={disabled}>
      {title}
    </Button>
  )
}

export default ButtonComponent
