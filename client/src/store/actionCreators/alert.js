import { ALERT_SHOW, ALERT_HIDE } from 'store/types'

export const alertShow = (data) => ({
  type: ALERT_SHOW,
  payload: data,
})

export const alertHide = () => ({
  type: ALERT_HIDE,
})
