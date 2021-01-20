import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  const displayMessage = useCallback((payload) => setShowMessage(payload), [])

  const clearMessage = useCallback(() => setMessage(null), [])

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)

      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, {
          method,
          body,
          headers,
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Oops!')
        }

        if (data.message) {
          setMessage({ type: 'success', msg: data.message })
          displayMessage(true)
        }

        setLoading(false)

        return data
      } catch (err) {
        setLoading(false)

        setMessage({ type: 'error', msg: err.message })

        displayMessage(true)

        throw err
      }
    },
    [displayMessage]
  )

  return {
    loading,
    message,
    showMessage,
    displayMessage,
    clearMessage,
    request,
  }
}
