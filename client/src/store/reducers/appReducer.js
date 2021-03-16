import { APP_READY, APP_LOADING } from 'store/types'

const initialState = {
  ready: false,
  loading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_READY:
      return {
        ...state,
        ready: action.payload,
      }
    case APP_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    default:
      return state
  }
}
