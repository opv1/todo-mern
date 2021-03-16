import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import { BadgeComponent } from 'components/UI/index'

const SidebarItem = ({ data, active }) => {
  const { onSelectList, onDisplayModal } = useActions()

  return (
    <ListGroup.Item
      className='sidebar-item-component d-flex align-items-center'
      active={active}
    >
      <span onClick={() => onSelectList(data.item)}>{data.item.title}</span>
      <BadgeComponent
        onClick={() => onDisplayModal(data)}
        variant={'dark ml-2'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default SidebarItem
