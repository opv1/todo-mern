import { AlertState, AlertAction, AlertActionTypes } from 'store/types/alert'

const initialState = {
  alert: false,
  data: { type: '', text: '' },
}

const alertReducer = (
  state = initialState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case AlertActionTypes.ALERT_SHOW:
      return {
        ...state,
        alert: true,
        data: { ...action.payload },
      }
    case AlertActionTypes.ALERT_HIDE:
      return {
        ...state,
        alert: false,
      }
    default:
      return state
  }
}

export default alertReducer
