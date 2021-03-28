import { getStorage } from 'utils/localStorage'

interface HeadersType {
  [name: string]: string
}

export const requestFetch = async (
  method: string,
  url: string,
  body: any,
  auth: boolean
) => {
  try {
    const storage = getStorage()
    const headers: HeadersType = {}

    if (auth && storage && storage.accessToken) {
      headers['Authorization'] = `Bearer ${storage.accessToken}`
    }

    if (body) {
      body = JSON.stringify(body)
      headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(url, { method, body, headers })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Ooops!')
    }

    return data
  } catch (err) {
    throw err
  }
}
