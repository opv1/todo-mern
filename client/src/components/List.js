import React, { useContext, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import {
  LoaderComponent,
  ListItemComponent,
  AddFormComponent,
} from 'components/index'
import { ButtonComponent } from 'components/UI/index'

function ListComponent() {
  const [display, setDisplay] = useState(false)

  const { selectedList, selectedTodos, loading, onAddTodo } = useContext(
    AppContext
  )

  return (
    <div className='list-component'>
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
                    <ListItemComponent
                      key={todo._id}
                      item={{ data: todo, name: 'todo' }}
                    />
                  ))
                ) : (
                  <ListGroup.Item style={{ pointerEvents: 'none' }}>
                    No todos
                  </ListGroup.Item>
                )}
              </>
            )}
          </ListGroup>
          {display ? (
            <AddFormComponent onClick={onAddTodo} setDisplay={setDisplay} />
          ) : (
            <ButtonComponent
              onClick={() => setDisplay(true)}
              variant={'primary m-3'}
              disabled={loading}
              title={'New todo'}
            />
          )}
        </>
      ) : null}
    </div>
  )
}

export default ListComponent
