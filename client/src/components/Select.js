import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'

const SelectComponent = () => {
  const [value, setValue] = useState(window.valueSelect)
  const { filteringTodos } = useActions()

  const handlerChange = (e) => {
    setValue(e.target.value)
    window.valueSelect = e.target.value
    filteringTodos(e.target.value)
  }

  return (
    <Form className='select-component w-75'>
      <Form.Group controlId='exampleForm.SelectCustom'>
        <Form.Label>Todo status</Form.Label>
        <Form.Control as='select' onChange={handlerChange} value={value}>
          <option defaultValue>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SelectComponent
