import React, { useContext } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { ButtonComponent } from './index'

function AddFormComponent({ onClick, value, setValue, display, setDisplay }) {
  const { loading } = useContext(AppContext)

  return (
    <InputGroup className='add-form-component m-3 w-75'>
      <FormControl
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type='text'
        name='value'
        placeholder='Value'
      />
      <InputGroup.Append>
        <ButtonComponent
          onClick={() => {
            setValue('')
            setDisplay(!display)
            onClick(value)
          }}
          title={'Add'}
          variant={'outline-success'}
          disabled={loading}
        />
        <ButtonComponent
          onClick={() => {
            setValue('')
            setDisplay(!display)
          }}
          title={'Cancel'}
          variant={'outline-secondary'}
          disabled={loading}
        />
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddFormComponent
