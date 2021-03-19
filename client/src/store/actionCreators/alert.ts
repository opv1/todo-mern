import { AlertDataType, AlertAction, AlertActionTypes } from 'store/types/alert'

export const alertShow = (data: AlertDataType): AlertAction => ({
  type: AlertActionTypes.ALERT_SHOW,
  payload: data,
})

export const alertHide = (): AlertAction => ({
  type: AlertActionTypes.ALERT_HIDE,
})
