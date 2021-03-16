import React from 'react'
import { useSelector } from 'react-redux'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useInput } from 'hooks/useInput'
import { ButtonComponent } from 'components/UI/index'

const AddFormComponent = ({ data, onClick, setDisplay }) => {
  const valueInput = useInput('')
  const { loading } = useSelector((state) => state.app)

  return (
    <InputGroup className='m-3 w-75'>
      <FormControl
        {...valueInput}
        type='text'
        name='value'
        placeholder='Value'
      />
      <InputGroup.Append>
        <ButtonComponent
          onClick={() => {
            setDisplay(false)
            onClick(data, valueInput.value)
          }}
          variant={'outline-success'}
          disabled={!valueInput.value || loading}
          title={'Add'}
        />
        <ButtonComponent
          onClick={() => setDisplay(false)}
          variant={'outline-secondary'}
          disabled={loading}
          title={'Cancel'}
        />
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddFormComponent
