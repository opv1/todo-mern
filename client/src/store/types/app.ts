export type AppState = {
  ready: boolean
  loading: boolean
}

export enum AppActionTypes {
  APP_READY = 'APP_READY',
  APP_LOADING = 'APP_LOADING',
}

interface IAppReadyAction {
  type: AppActionTypes.APP_READY
  payload: boolean
}

interface IAppLoadingAction {
  type: AppActionTypes.APP_LOADING
}

export type AppAction = IAppReadyAction | IAppLoadingAction
