import { AppState, AppAction, AppActionTypes } from 'store/types/app'

const initialState = {
  ready: false,
  loading: false,
  history: null,
}

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.APP_READY:
      return {
        ...state,
        ready: action.payload,
      }
    case AppActionTypes.APP_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case AppActionTypes.APP_HISTORY:
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state
  }
}

export default appReducer
