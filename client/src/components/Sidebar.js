import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import { SidebarItemComponent, AddFormComponent } from 'components/index'
import { ButtonComponent } from 'components/UI/index'

const SidebarComponent = () => {
  const [display, setDisplay] = useState(false)
  const { loading } = useSelector((state) => state.app)
  const { lists, selectedList } = useSelector((state) => state.list)
  const { onAddList } = useActions()

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <span className='text-center'>Lists</span>
        {lists.length !== 0 ? (
          lists.map((list) => (
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
          onClick={() => setDisplay(true)}
          variant={'primary m-3'}
          disabled={loading}
          title={'New list'}
        />
      )}
    </div>
  )
}

export default SidebarComponent
