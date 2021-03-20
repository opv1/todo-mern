import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import {
  LoaderComponent,
  ListItemComponent,
  AddFormComponent,
} from 'components/index'
import { ButtonComponent } from 'components/UI/index'
import { TodoType } from 'store/types/todo'

const ListComponent: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const { loading } = useTypeSelector((state) => state.app)
  const { selectedList } = useTypeSelector((state) => state.list)
  const { displayedTodos } = useTypeSelector((state) => state.todo)
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
                {displayedTodos.length !== 0 ? (
                  displayedTodos.map((todo: TodoType) => (
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
              data={{ selectedList, displayedTodos }}
              onClick={onAddTodo}
              setDisplay={setDisplay}
            />
          ) : (
            <ButtonComponent
              className='m-3'
              onClick={() => setDisplay(true)}
              variant='primary'
              disabled={loading}
              title='New todo'
            />
          )}
        </>
      ) : null}
    </div>
  )
}

export default ListComponent
