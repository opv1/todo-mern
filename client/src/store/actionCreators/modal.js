import { MODAL_SHOW, MODAL_HIDE } from 'store/types'

export const modalShow = (data) => ({
  type: MODAL_SHOW,
  payload: data,
})

export const modalHide = () => ({
  type: MODAL_HIDE,
})
