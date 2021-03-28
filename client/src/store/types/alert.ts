export type AlertDataType = {
  type: string
  text: string
}

export type AlertState = {
  alert: boolean
  data: AlertDataType
}

export enum AlertActionTypes {
  ALERT_SHOW = 'ALERT_SHOW',
  ALERT_HIDE = 'ALERT_HIDE',
}

interface IAlertShowAction {
  type: AlertActionTypes.ALERT_SHOW
  payload: AlertDataType
}

interface IAlertHideAction {
  type: AlertActionTypes.ALERT_HIDE
}

export type AlertAction = IAlertShowAction | IAlertHideAction
