import React from 'react'
import { Card } from 'react-bootstrap'
import { ButtonComponent } from './UI4/index'

function TodoComponent({ todo, onSelectedTodo }) {
  return (
    <Card className='todo-component text-center'>
      <Card.Header>Created {new Date(todo.date).toLocaleString()}</Card.Header>
      <Card.Body>
        <Card.Title>What to do</Card.Title>
        <Card.Text>{todo.text}</Card.Text>
        <Card.Text>
          Completed:{' '}
          <span style={{ fontWeight: 'bold' }}>{`${todo.completed}`}</span>
        </Card.Text>
        {onSelectedTodo ? (
          <ButtonComponent
            onClick={() => onSelectedTodo(todo)}
            variant={'primary'}
            title={'Go todo'}
          />
        ) : null}
      </Card.Body>
    </Card>
  )
}

export default TodoComponent
