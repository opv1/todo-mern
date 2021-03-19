import { ModalAction, ModalActionTypes } from 'store/types/modal'

export const modalShow = (data: any): ModalAction => ({
  type: ModalActionTypes.MODAL_SHOW,
  payload: data,
})

export const modalHide = (): ModalAction => ({
  type: ModalActionTypes.MODAL_HIDE,
})
