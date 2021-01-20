import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ItemComponent({ todo, onSelectedTodo }) {
  return (
    <Card className='item-component text-center'>
      <Card.Header>Updated {new Date(todo.date).toLocaleString()}</Card.Header>
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
      <Card.Footer className='text-muted'>
        Created {new Date(todo.date).toLocaleString()}
      </Card.Footer>
    </Card>
  )
}

export default ItemComponent
