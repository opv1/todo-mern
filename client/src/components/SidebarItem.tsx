import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import { BadgeComponent } from 'components/UI/index'
import { ListType } from 'store/types/list'

interface Props {
  data: ListType
  active: boolean
}

const SidebarItemComponent: React.FC<Props> = ({ data, active }) => {
  const [list] = useState(data)
  const { onSelectList, onDisplayModal } = useActions()

  return (
    <ListGroup.Item
      className='sidebar-item-component d-flex align-items-center'
      active={active}
    >
      <span onClick={() => onSelectList(list)}>{list.title}</span>
      <BadgeComponent
        className='ml-2'
        onClick={() => onDisplayModal({ type: 'list', item: list })}
        variant='danger'
        title='Delete'
      />
    </ListGroup.Item>
  )
}

export default SidebarItemComponent
