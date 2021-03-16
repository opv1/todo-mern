import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import {
  LoaderComponent,
  ListItemComponent,
  AddFormComponent,
} from 'components/index'
import { ButtonComponent } from 'components/UI/index'

const ListComponent = () => {
  const [display, setDisplay] = useState(false)
  const { loading } = useSelector((state) => state.app)
  const { selectedList } = useSelector((state) => state.list)
  const { selectedTodos } = useSelector((state) => state.todo)
  const { onAddTodo } = useActions()

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
                      data={{ type: 'todo', item: todo }}
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
            <AddFormComponent
              data={{ selectedList, selectedTodos }}
              onClick={onAddTodo}
              setDisplay={setDisplay}
            />
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
