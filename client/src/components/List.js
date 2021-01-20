import React, { useContext, useState } from 'react'
import {
  ListGroup,
  InputGroup,
  Button,
  FormControl,
  Badge,
} from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function ListComponent() {
  const {
    selectedList,
    selectedTodos,
    onAddTodo,
    onSelectedTodo,
    onDisplayModal,
  } = useContext(AppContext)

  const [text, setText] = useState('')
  const [display, setDisplay] = useState(false)

  return (
    <div className='list-component w-100'>
      {!!selectedList ? (
        <ListGroup variant='flush'>
          <ListGroup.Item>{selectedList.title}</ListGroup.Item>
          {selectedTodos.length !== 0 ? (
            selectedTodos.map((todo) => (
              <ListGroup.Item
                key={todo._id}
                onClick={() => onSelectedTodo(todo)}
              >
                {todo.text}
                <Badge
                  onClick={(event) => onDisplayModal(event, 'todo', todo)}
                  variant='dark ml-2'
                >
                  &#10006;
                </Badge>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No todos</ListGroup.Item>
          )}
          {display ? (
            <ListGroup.Item>
              <InputGroup>
                <FormControl
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  type='text'
                  name='text'
                  placeholder='Text'
                />
                <InputGroup.Append>
                  <Button
                    onClick={() => {
                      setText('')
                      setDisplay(!display)
                      onAddTodo(text)
                    }}
                    variant='outline-success'
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => setDisplay(!display)}
                    variant='outline-secondary'
                  >
                    Cancel
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item onClick={() => setDisplay(!display)}>
              New todo
            </ListGroup.Item>
          )}
        </ListGroup>
      ) : null}
    </div>
  )
}

export default ListComponent
