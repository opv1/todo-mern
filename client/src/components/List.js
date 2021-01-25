import React, { useContext, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import {
  LoaderComponent,
  ListItemComponent,
  AddFormComponent,
  ButtonComponent,
} from './index'

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
                      onClick={onSelectedTodo}
                      onDisplayModal={onDisplayModal}
                    />
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
