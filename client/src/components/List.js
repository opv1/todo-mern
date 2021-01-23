import React, { useContext, useState } from 'react'
import { ListGroup, Button, Badge } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { LoaderComponent, AddFormComponent } from './index'

function ListComponent() {
  const {
    loading,
    selectedList,
    selectedTodos,
    onAddTodo,
    onSelectedTodo,
    onDisplayModal,
  } = useContext(AppContext)

  const [value, setValue] = useState('')
  const [display, setDisplay] = useState(false)

  return (
    <div className='list-component w-100'>
      {!!selectedList ? (
        <>
          <ListGroup variant='flush'>
            <span className='text-center'>{selectedList.title}</span>
            {loading ? (
              <LoaderComponent />
            ) : (
              <>
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
              </>
            )}
          </ListGroup>
          {display ? (
            <AddFormComponent
              onClick={onAddTodo}
              value={value}
              setValue={setValue}
              display={display}
              setDisplay={setDisplay}
            />
          ) : (
            <Button
              className='m-3'
              onClick={() => setDisplay(!display)}
              disabled={loading}
            >
              New todo
            </Button>
          )}
        </>
      ) : null}
    </div>
  )
}

export default ListComponent
