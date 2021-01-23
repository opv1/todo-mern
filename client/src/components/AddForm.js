import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

function AddFormComponent({ onClick, value, setValue, display, setDisplay }) {
  return (
    <InputGroup className='m-3 w-75'>
      <FormControl
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type='text'
        name='value'
        placeholder='Value'
      />
      <InputGroup.Append>
        <Button
          onClick={() => {
            setValue('')
            setDisplay(!display)
            onClick(value)
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
  )
}

export default AddFormComponent
