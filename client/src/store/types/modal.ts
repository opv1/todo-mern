export interface ModalState {
  modal: boolean
  data: any
}

export enum ModalActionTypes {
  MODAL_SHOW = 'MODAL_SHOW',
  MODAL_HIDE = 'MODAL_HIDE',
}

interface ModalShowAction {
  type: ModalActionTypes.MODAL_SHOW
  payload: any
}

interface ModalHideAction {
  type: ModalActionTypes.MODAL_HIDE
}

export type ModalAction = ModalShowAction | ModalHideAction
