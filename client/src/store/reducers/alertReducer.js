import { ALERT_SHOW, ALERT_HIDE } from 'store/types'

const initialState = {
  alert: false,
  data: { type: '', text: '' },
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        ...state,
        alert: true,
        data: { ...action.payload },
      }
    case ALERT_HIDE:
      return {
        ...state,
        alert: false,
      }
    default:
      return state
  }
}
