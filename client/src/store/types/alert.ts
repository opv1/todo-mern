export type AlertDataType = {
  type: string
  text: string
}

export interface AlertState {
  alert: boolean
  data: AlertDataType
}

export enum AlertActionTypes {
  ALERT_SHOW = 'ALERT_SHOW',
  ALERT_HIDE = 'ALERT_HIDE',
}

interface AlertShowAction {
  type: AlertActionTypes.ALERT_SHOW
  payload: AlertDataType
}

interface AlertHideAction {
  type: AlertActionTypes.ALERT_HIDE
}

export type AlertAction = AlertShowAction | AlertHideAction
