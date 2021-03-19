import { AppAction, AppActionTypes } from 'store/types/app'

export const appReady = (ready: boolean): AppAction => ({
  type: AppActionTypes.APP_READY,
  payload: ready,
})

export const appLoading = (): AppAction => ({
  type: AppActionTypes.APP_LOADING,
})
