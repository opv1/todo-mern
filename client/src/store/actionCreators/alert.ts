import { AlertAction, AlertActionTypes } from 'store/types/alert'

export const alertShow = (data: any): AlertAction => ({
  type: AlertActionTypes.ALERT_SHOW,
  payload: data,
})

export const alertHide = (): AlertAction => ({
  type: AlertActionTypes.ALERT_HIDE,
})
