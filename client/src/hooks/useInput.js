import { useState } from 'react'

export const useInput = (initiallValue) => {
  const [value, setValue] = useState(initiallValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return { value, onChange }
}
