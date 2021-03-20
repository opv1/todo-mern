import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useInput } from 'hooks/useInput'
import { ButtonComponent } from 'components/UI/index'

interface Props {
  data: object
  onClick: (data: object, value: string) => void
  setDisplay: (display: boolean) => void
}

const AddFormComponent: React.FC<Props> = ({ data, onClick, setDisplay }) => {
  const valueInput = useInput('')
  const { loading } = useTypeSelector((state) => state.app)

  const handlerClick = () => {
    setDisplay(false)
    onClick(data, valueInput.value)
  }

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
          onClick={handlerClick}
          variant='outline-success'
          disabled={!valueInput.value || loading}
          title='Add'
        />
        <ButtonComponent
          onClick={() => setDisplay(false)}
          variant='outline-secondary'
          disabled={loading}
          title='Cancel'
        />
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddFormComponent
