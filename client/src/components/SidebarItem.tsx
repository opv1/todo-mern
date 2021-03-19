import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import {} from 'store/types/list'
import { BadgeComponent } from 'components/UI/index'

interface Props {
  data: any
  active: boolean
}

const SidebarItem: React.FC<Props> = ({ data, active }) => {
  const { onSelectList, onDisplayModal } = useActions()

  return (
    <ListGroup.Item
      className='sidebar-item-component d-flex align-items-center'
      active={active}
    >
      <span onClick={() => onSelectList(data.item)}>{data.item.title}</span>
      <BadgeComponent
        className='ml-2'
        onClick={() => onDisplayModal(data)}
        variant='dark'
        title='Delete'
      />
    </ListGroup.Item>
  )
}

export default SidebarItem
