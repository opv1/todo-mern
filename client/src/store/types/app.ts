export type AppState = {
  ready: boolean
  loading: boolean
  history: any
}

export enum AppActionTypes {
  APP_READY = 'APP_READY',
  APP_LOADING = 'APP_LOADING',
  APP_HISTORY = 'APP_HISTORY',
}

interface IAppReadyAction {
  type: AppActionTypes.APP_READY
  payload: boolean
}

interface IAppLoadingAction {
  type: AppActionTypes.APP_LOADING
}

interface IAppHistoryAction {
  type: AppActionTypes.APP_HISTORY
  payload: any
}

export type AppAction = IAppReadyAction | IAppLoadingAction | IAppHistoryAction
