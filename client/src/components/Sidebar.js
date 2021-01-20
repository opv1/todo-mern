import React, { useContext, useState } from 'react'
import {
  ListGroup,
  InputGroup,
  Button,
  FormControl,
  Badge,
} from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function SidebarComponent() {
  const { lists, onAddList, onSelectedList, onDisplayModal } = useContext(
    AppContext
  )

  const [title, setTitle] = useState('')
  const [display, setDisplay] = useState(false)

  return (
    <div className='sidebar-component'>
      <ListGroup variant='flush'>
        <ListGroup.Item>Lists</ListGroup.Item>
        {lists.length !== 0 ? (
          lists.map((list) => (
            <ListGroup.Item key={list._id} onClick={() => onSelectedList(list)}>
              {list.title}
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
        <ListGroup.Item onClick={() => setDisplay(!display)}>
          New list
        </ListGroup.Item>
      </ListGroup>
      {display ? (
        <InputGroup className='mb-3'>
          <FormControl
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type='text'
            name='title'
            placeholder='Title'
          />
          <InputGroup.Append>
            <Button
              onClick={() => {
                setTitle('')
                setDisplay(!display)
                onAddList(title)
              }}
              variant='outline-success'
            >
              Add
            </Button>
            <Button
              onClick={() => setDisplay(!display)}
              variant='outline-secondary'
            >
              Cancel
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ) : null}
    </div>
  )
}

export default SidebarComponent
