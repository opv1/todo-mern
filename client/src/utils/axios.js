import axios from 'axios'
import { getStorage } from 'utils/localStorage'

export const request = async (method, url, data, auth) => {
  const storage = getStorage()
  const config = {}

  if (auth && storage && storage.token) {
    config.headers = { Authorization: `Bearer ${storage.token}` }
  }

  return await axios({
    method,
    url,
    data,
    ...config,
  })
}
