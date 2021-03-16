import { APP_READY, APP_LOADING } from 'store/types'

export const appReady = (ready) => ({
  type: APP_READY,
  payload: ready,
})

export const appLoading = () => ({
  type: APP_LOADING,
})
