import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { SidebarItemComponent, AddFormComponent } from 'components/index'
import { ButtonComponent } from 'components/UI/index'
import { ListType } from 'store/types/list'

const SidebarComponent: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const { loading } = useTypeSelector((state) => state.app)
  const { lists, selectedList } = useTypeSelector((state) => state.list)
  const { onAddList } = useActions()

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <span className='text-center'>Lists</span>
        {lists.length !== 0 ? (
          lists.map((list: ListType) => (
            <SidebarItemComponent
              key={list._id}
              data={{ type: 'list', item: list }}
              active={selectedList && selectedList._id === list._id}
            />
          ))
        ) : (
          <ListGroup.Item style={{ pointerEvents: 'none' }}>
            No lists
          </ListGroup.Item>
        )}
      </ListGroup>
      {display ? (
        <AddFormComponent
          data={{ lists }}
          onClick={onAddList}
          setDisplay={setDisplay}
        />
      ) : (
        <ButtonComponent
          className='m-3'
          onClick={() => setDisplay(true)}
          variant='primary'
          disabled={loading}
          title='New list'
        />
      )}
    </div>
  )
}

export default SidebarComponent
