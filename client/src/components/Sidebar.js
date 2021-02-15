import React, { useContext, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { ListItemComponent, AddFormComponent } from './index'
import { ButtonComponent } from './UI4/index'

function SidebarComponent() {
  const {
    lists,
    loading,
    onAddList,
    onSelectedList,
    onDisplayModal,
  } = useContext(AppContext)

  const [value, setValue] = useState('')
  const [display, setDisplay] = useState(false)

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <span className='text-center'>Lists</span>
        {lists.length !== 0 ? (
          lists.map((list) => (
            <ListItemComponent
              key={list._id}
              item={{ data: list, name: 'list' }}
              onClick={onSelectedList}
              onDisplayModal={onDisplayModal}
            />
          ))
        ) : (
          <ListGroup.Item>No lists</ListGroup.Item>
        )}
      </ListGroup>
      {display ? (
        <AddFormComponent
          onClick={onAddList}
          value={value}
          setValue={setValue}
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
