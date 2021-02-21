import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { BadgeComponent } from 'components/UI/index'

const SidebarItem = ({ item, active }) => {
  const { onSelectedList, onDisplayModal } = useContext(AppContext)

  return (
    <ListGroup.Item
      className='sidebar-item-component d-flex align-items-center'
      active={active}
    >
      <span onClick={(e) => onSelectedList(e, item.data)}>
        {item.data.title}
      </span>
      <BadgeComponent
        onClick={(event) => onDisplayModal(event, item.name, item.data)}
        variant={'dark ml-2'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default SidebarItem
