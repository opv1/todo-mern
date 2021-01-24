import React, { useContext } from 'react'
import { ListGroup, Form, Badge } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function ListItemComponent({ item, onClick, onDisplayModal }) {
  const { onCheckTodo } = useContext(AppContext)

  const styles = {}

  if (item.data.completed) {
    styles.textDecoration = 'line-through'
  }

  return (
    <ListGroup.Item className='list-item-component d-flex align-items-center'>
      <span onClick={() => onClick(item.data)} style={styles}>
        {item.data.title || item.data.text}
      </span>
      {item.data.hasOwnProperty('completed') ? (
        <Form.Check
          className='ml-2'
          onChange={(e) => onCheckTodo(e, item.data)}
          id={item.data._id}
          type='checkbox'
          checked={item.data.completed && item.data.completed}
        />
      ) : null}
      <Badge
        onClick={(event) => onDisplayModal(event, item.name, item.data)}
        variant='dark ml-2'
      >
        &#10006;
      </Badge>
    </ListGroup.Item>
  )
}

export default ListItemComponent
