import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { ButtonComponent } from 'components/UI/index'

function TodoComponent({ todo, onSelectedTodo }) {
  const { history } = useContext(AppContext)

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
            onClick={(e) => onSelectedTodo(e, todo)}
            variant={'primary'}
            title={'Go todo'}
          />
        ) : (
          <ButtonComponent
            onClick={() => history.goBack()}
            variant={'primary'}
            title={'Go back'}
          />
        )}
      </Card.Body>
    </Card>
  )
}

export default TodoComponent
