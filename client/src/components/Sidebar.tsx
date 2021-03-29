import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { SidebarItemComponent, AddComponent } from 'components/index'
import { ListType } from 'store/types/list'

const SidebarComponent: React.FC = () => {
  const { lists, selectedList } = useTypeSelector((state) => state.list)
  const { onAddList } = useActions()

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <span className='sidebar-title'>Lists</span>
        {lists.length !== 0 ? (
          lists.map((list: ListType) => (
            <SidebarItemComponent
              key={list._id}
              data={list}
              active={selectedList && selectedList._id === list._id}
            />
          ))
        ) : (
          <ListGroup.Item style={{ pointerEvents: 'none' }}>
            No lists
          </ListGroup.Item>
        )}
      </ListGroup>
      <AddComponent onClick={onAddList} />
    </div>
  )
}

export default SidebarComponent
