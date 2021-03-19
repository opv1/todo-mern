export interface AppState {
  ready: boolean
  loading: boolean
}

export enum AppActionTypes {
  APP_READY = 'APP_READY',
  APP_LOADING = 'APP_LOADING',
}

interface AppReadyAction {
  type: AppActionTypes.APP_READY
  payload: boolean
}

interface AppLoadingAction {
  type: AppActionTypes.APP_LOADING
}

export type AppAction = AppReadyAction | AppLoadingAction
