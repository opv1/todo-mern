import React, { useContext } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { ButtonComponent } from 'components/UI/index'

function Add({ onClick, value, setValue, setDisplay }) {
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
            setDisplay(false)
            onClick(value)
          }}
          variant={'outline-success'}
          disabled={!value || loading}
          title={'Add'}
        />
        <ButtonComponent
          onClick={() => {
            setValue('')
            setDisplay(false)
          }}
          variant={'outline-secondary'}
          disabled={loading}
          title={'Cancel'}
        />
      </InputGroup.Append>
    </InputGroup>
  )
}

export default Add
