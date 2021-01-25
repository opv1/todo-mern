import React from 'react'
import { Badge } from 'react-bootstrap'

function BadgeComponent({ onClick, variant, title }) {
  return (
    <Badge onClick={onClick} variant={variant}>
      {title}
    </Badge>
  )
}

export default BadgeComponent
