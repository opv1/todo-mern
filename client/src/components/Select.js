import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function SelectComponent() {
  const { filteringTodos } = useContext(AppContext)

  const [value, setValue] = useState(window.valueSelect)

  return (
    <Form className='select-component w-75'>
      <Form.Group controlId='exampleForm.SelectCustom'>
        <Form.Label>Todo status</Form.Label>
        <Form.Control
          as='select'
          onChange={(e) => {
            setValue(e.target.value)
            window.valueSelect = e.target.value
            filteringTodos(e.target.value)
          }}
          value={value}
        >
          <option defaultValue>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SelectComponent
