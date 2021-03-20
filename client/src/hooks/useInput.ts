import { useState, ChangeEvent } from 'react'

export const useInput = (initiallValue: string) => {
  const [value, setValue] = useState<string>(initiallValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return { value, onChange }
}
