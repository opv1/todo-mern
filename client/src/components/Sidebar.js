import React, { useContext, useState } from 'react'
import { ListGroup, Button, Badge } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { AddFormComponent } from './index'

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
            <ListGroup.Item key={list._id}>
              <span onClick={() => onSelectedList(list)}>{list.title}</span>
              <Badge
                onClick={(event) => onDisplayModal(event, 'list', list)}
                variant='dark ml-2'
              >
                &#10006;
              </Badge>
            </ListGroup.Item>
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
        <Button
          className='m-3'
          onClick={() => setDisplay(!display)}
          disabled={loading}
        >
          New list
        </Button>
      )}
    </div>
  )
}

export default SidebarComponent
