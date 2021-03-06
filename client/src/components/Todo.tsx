import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { ButtonComponent } from 'components/UI/index'
import { TodoType } from 'store/types/todo'

interface Props {
  todo: TodoType
  onSelectTodo?: (todo: TodoType) => void
}

type StylesType = {
  [name: string]: string
}

const TodoComponent: React.FC<Props> = ({ todo, onSelectTodo }) => {
  const history = useHistory()

  const styles: StylesType = {
    fontWeight: 'bold',
    color: todo.completed ? 'green' : 'red',
  }

  return (
    <Card className='todo-component text-center'>
      <Card.Header>Created {new Date(todo.date).toLocaleString()}</Card.Header>
      <Card.Body>
        <Card.Title>What to do</Card.Title>
        <Card.Text>{todo.text}</Card.Text>
        <Card.Text>
          Completed:{' '}
          <span style={styles}>{todo.completed ? 'Yep' : 'Nope'}</span>
        </Card.Text>
        {onSelectTodo ? (
          <ButtonComponent
            onClick={() => onSelectTodo(todo)}
            variant='primary'
            title='Go todo'
          />
        ) : (
          <ButtonComponent
            onClick={() => history.goBack()}
            variant='primary'
            title='Go back'
          />
        )}
      </Card.Body>
    </Card>
  )
}

export default TodoComponent
