import React from 'react'
import { Card, Button } from 'react-bootstrap'

function TodoComponent({ todo, onSelectedTodo }) {
  return (
    <Card className='item-component text-center'>
      <Card.Header>Created {new Date(todo.date).toLocaleString()}</Card.Header>
      <Card.Body>
        <Card.Title>What to do</Card.Title>
        <Card.Text>{todo.text}</Card.Text>
        <Card.Text>Completed {`${todo.completed}`}</Card.Text>
        {onSelectedTodo ? (
          <Button onClick={() => onSelectedTodo(todo)} variant='primary'>
            Go todo
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  )
}

export default TodoComponent
