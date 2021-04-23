import React, { useEffect, useRef } from 'react'
import { ListGroup, FormControl } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import {
  LoaderComponent,
  ListItemComponent,
  AddComponent,
} from 'components/index'
import { TodoType } from 'store/types/todo'

const ListComponent: React.FC = () => {
  const valueRef = useRef<HTMLInputElement>(null)
  const { loading } = useTypeSelector((state) => state.app)
  const { selectedList } = useTypeSelector((state) => state.list)
  const { displayedTodos } = useTypeSelector((state) => state.todo)
  const { onRenameList, onAddTodo } = useActions()

  const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && valueRef.current!.value.length !== 0) {
      valueRef.current!.blur()
      onRenameList(valueRef.current!.value)
    }
  }

  useEffect(() => {
    if (valueRef.current) {
      valueRef.current!.value = selectedList.title
    }
  }, [selectedList])

  return (
    <div className='list-component'>
      {!!selectedList ? (
        <>
          <ListGroup variant='flush'>
            <FormControl
              className='list-title'
              onKeyPress={handlerKeyPress}
              ref={valueRef}
              type='text'
              name='value'
              placeholder='List name'
            />
            {loading ? (
              <LoaderComponent />
            ) : (
              <>
                {displayedTodos.length !== 0 ? (
                  displayedTodos.map((todo: TodoType) => (
                    <ListItemComponent key={todo._id} data={todo} />
                  ))
                ) : (
                  <ListGroup.Item style={{ pointerEvents: 'none' }}>
                    No todos
                  </ListGroup.Item>
                )}
              </>
            )}
          </ListGroup>
          <AddComponent onClick={onAddTodo} />
        </>
      ) : null}
    </div>
  )
}

export default ListComponent
