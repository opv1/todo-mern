import React from 'react'
import { Button } from 'react-bootstrap'

interface ButtonProps {
  className?: string
  onClick: () => void
  variant: string
  disabled?: boolean
  title: string
}

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  onClick,
  variant,
  disabled,
  title,
}) => {
  return (
    <Button
      className={className && className}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {title}
    </Button>
  )
}

export default ButtonComponent
