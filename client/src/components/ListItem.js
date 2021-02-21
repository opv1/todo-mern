import React, { useContext } from 'react'
import { ListGroup, Form } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { BadgeComponent } from 'components/UI/index'

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
          onChange={(event) => onCheckTodo(event, item.data)}
          type='checkbox'
          checked={item.data.completed}
        />
      ) : null}
      <BadgeComponent
        onClick={(event) => onDisplayModal(event, item.name, item.data)}
        variant={'dark ml-2'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default ListItemComponent
