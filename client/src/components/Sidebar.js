import React, { useContext, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { ListItemComponent, AddFormComponent, ButtonComponent } from './index'

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
          display={display}
          setDisplay={setDisplay}
        />
      ) : (
        <ButtonComponent
          onClick={() => setDisplay(!display)}
          title={'New list'}
          variant={'primary'}
          disabled={loading}
        />
      )}
    </div>
  )
}

export default SidebarComponent
