import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonComponent({ onClick, title, variant, disabled }) {
  const cls = ['button-component']

  if (variant === 'primary') {
    cls.push('m-3')
  }

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
