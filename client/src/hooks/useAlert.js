import { useCallback } from 'react'

export const useAlert = () => {
  return useCallback((text) => {
    if (text) {
      console.log(text)
    }
  }, [])
}
