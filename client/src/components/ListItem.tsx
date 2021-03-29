import React, { useState } from 'react'
import { ListGroup, Form } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import { BadgeComponent } from 'components/UI/index'
import { TodoType } from 'store/types/todo'

interface Props {
  data: TodoType
}

const ListItemComponent: React.FC<Props> = ({ data }) => {
  const [todo] = useState(data)
  const { onSelectTodo, onDisplayModal, onCheckTodo } = useActions()

  return (
    <ListGroup.Item className='list-item-component d-flex align-items-center'>
      <span
        onClick={() => onSelectTodo(todo)}
        style={
          todo.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {todo.text}
      </span>
      <Form.Check
        className='ml-2'
        onChange={(event) => onCheckTodo(event.target.checked, todo._id)}
        type='checkbox'
        checked={todo.completed}
      />
      <BadgeComponent
        className='ml-2'
        onClick={() => onDisplayModal({ type: 'todo', item: todo })}
        variant={'danger'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default ListItemComponent
