export type ModalDataType = {
  type: string
  item: any
}

export interface ModalState {
  modal: boolean
  data: ModalDataType
}

export enum ModalActionTypes {
  MODAL_SHOW = 'MODAL_SHOW',
  MODAL_HIDE = 'MODAL_HIDE',
}

interface ModalShowAction {
  type: ModalActionTypes.MODAL_SHOW
  payload: ModalDataType
}

interface ModalHideAction {
  type: ModalActionTypes.MODAL_HIDE
}

export type ModalAction = ModalShowAction | ModalHideAction
