import React from 'react'
import { Badge } from 'react-bootstrap'

interface Props {
  className?: string
  onClick: () => void
  variant: string
  title: string
}

const BadgeComponent: React.FC<Props> = (props) => {
  return <Badge {...props}>{props.title}</Badge>
}

export default BadgeComponent
