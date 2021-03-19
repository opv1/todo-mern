import axios, { AxiosRequestConfig, Method } from 'axios'
import { getStorage } from 'utils/localStorage'

interface IPayload {
  headers?: object
}

export const requestAxios = async (
  method: string,
  url: string,
  data: any | null,
  auth: boolean
) => {
  const storage = getStorage()
  const payload: IPayload = {}

  if (auth && storage && storage.accessToken) {
    payload.headers = { Authorization: `Bearer ${storage.accessToken}` }
  }

  const config: AxiosRequestConfig = {
    method: method as Method,
    url,
    data,
    ...payload,
  }

  return await axios(config)
}
