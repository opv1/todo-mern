import React, { useContext } from 'react'
import { ListGroup, Form } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { BadgeComponent } from 'components/UI/index'

function ListItemComponent({ item }) {
  const { onSelectedTodo, onDisplayModal, onCheckTodo } = useContext(AppContext)

  return (
    <ListGroup.Item className='list-item-component d-flex align-items-center'>
      <span
        onClick={(e) => onSelectedTodo(e, item.data)}
        style={
          item.data.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {item.data.text}
      </span>
      <Form.Check
        className='ml-2'
        onChange={(e) => onCheckTodo(e, item.data)}
        type='checkbox'
        checked={item.data.completed}
      />
      <BadgeComponent
        onClick={(e) => onDisplayModal(e, item.name, item.data)}
        variant={'dark ml-2'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default ListItemComponent
