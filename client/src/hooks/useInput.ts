import { useState, ChangeEvent, useEffect } from 'react'

export const useInput = (initiallValue: string) => {
  const [value, setValue] = useState<string>(initiallValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  useEffect(() => {
    setValue(initiallValue)
  }, [initiallValue])

  return { value, onChange }
}
