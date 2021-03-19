import React from 'react'
import { Badge } from 'react-bootstrap'

interface BadgeProps {
  className?: string
  onClick: () => void
  variant: string
  title: string
}

const BadgeComponent: React.FC<BadgeProps> = ({
  className,
  onClick,
  variant,
  title,
}) => {
  return (
    <Badge
      className={className && className}
      onClick={onClick}
      variant={variant}
    >
      {title}
    </Badge>
  )
}

export default BadgeComponent
