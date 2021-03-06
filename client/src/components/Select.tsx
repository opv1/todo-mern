import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'

declare global {
  interface Window {
    valueSelect: any
  }
}

const SelectComponent: React.FC = () => {
  const [value, setValue] = useState<string>(window.valueSelect)
  const { displayedTodos } = useTypeSelector((state) => state.todo)
  const { filteringTodos } = useActions()

  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    window.valueSelect = event.target.value
    setValue(event.target.value)
    filteringTodos(event.target.value)
  }

  useEffect(() => {
    filteringTodos(value)
    // eslint-disable-next-line
  }, [displayedTodos])

  return (
    <Form className='select-component w-75'>
      <Form.Group controlId='exampleForm.SelectCustom'>
        <Form.Label>Todo status</Form.Label>
        <Form.Control as='select' onChange={handlerChange} value={value}>
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SelectComponent
