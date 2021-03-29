import { useState, ChangeEvent } from 'react'

export const useInput = (initiallValue: string) => {
  const [value, setValue] = useState<string>(initiallValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  return { value, onChange }
}
