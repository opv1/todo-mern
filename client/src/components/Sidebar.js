import React, { useState, useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { SidebarItemComponent, AddFormComponent } from 'components/index'
import { ButtonComponent } from 'components/UI/index'

function SidebarComponent() {
  const [display, setDisplay] = useState(false)

  const { lists, selectedList, loading, onAddList } = useContext(AppContext)

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <span className='text-center'>Lists</span>
        {lists.length !== 0 ? (
          lists.map((list) => (
            <SidebarItemComponent
              key={list._id}
              item={{ data: list, name: 'list' }}
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
        <AddFormComponent onClick={onAddList} setDisplay={setDisplay} />
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
