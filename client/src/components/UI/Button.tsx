import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  className?: string
  onClick: () => void
  variant: string
  disabled?: boolean
  title: string
}

const ButtonComponent: React.FC<Props> = (props) => {
  return <Button {...props}>{props.title}</Button>
}

export default ButtonComponent
