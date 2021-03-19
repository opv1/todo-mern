import React from 'react'
import { ListGroup, Form } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { BadgeComponent } from 'components/UI/index'

interface Props {
  data: any
}

const ListItemComponent: React.FC<Props> = ({ data }) => {
  const { selectedTodos } = useTypeSelector((state) => state.todo)
  const { onSelectTodo, onDisplayModal, onCheckTodo } = useActions()

  return (
    <ListGroup.Item className='list-item-component d-flex align-items-center'>
      <span
        onClick={() => onSelectTodo(data.item)}
        style={
          data.item.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {data.item.text}
      </span>
      <Form.Check
        className='ml-2'
        onChange={(e) =>
          onCheckTodo({ selectedTodos }, e.target.checked, data.item)
        }
        type='checkbox'
        checked={data.item.completed}
      />
      <BadgeComponent
        onClick={() => onDisplayModal(data)}
        variant={'dark ml-2'}
        title={'Delete'}
      />
    </ListGroup.Item>
  )
}

export default ListItemComponent
