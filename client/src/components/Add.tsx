import React, { useState, ChangeEvent } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { ButtonComponent } from 'components/UI/index'

interface Props {
  onClick: (value: string) => void
}

const AddComponent: React.FC<Props> = ({ onClick }) => {
  const [display, setDisplay] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const { loading } = useTypeSelector((state) => state.app)

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  const onUpdateForm = () => {
    setDisplay(!display)
    if (value) setValue('')
  }

  const onAddClick = () => {
    onUpdateForm()
    onClick(value)
  }

  return (
    <div>
      {display ? (
        <InputGroup className='m-3 w-75'>
          <FormControl
            onChange={handlerChange}
            value={value}
            type='text'
            name='value'
            placeholder='Value'
          />
          <InputGroup.Append>
            <ButtonComponent
              onClick={onAddClick}
              variant='outline-success'
              disabled={!value || loading}
              title='Add'
            />
            <ButtonComponent
              onClick={onUpdateForm}
              variant='outline-secondary'
              disabled={loading}
              title='Cancel'
            />
          </InputGroup.Append>
        </InputGroup>
      ) : (
        <ButtonComponent
          className='m-3'
          onClick={onUpdateForm}
          variant='primary'
          disabled={loading}
          title='Show add form'
        />
      )}
    </div>
  )
}

export default AddComponent
