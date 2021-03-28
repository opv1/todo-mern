export type ModalDataType = {
  type: string
  item: any
}

export type ModalState = {
  modal: boolean
  data: ModalDataType
}

export enum ModalActionTypes {
  MODAL_SHOW = 'MODAL_SHOW',
  MODAL_HIDE = 'MODAL_HIDE',
}

interface IModalShowAction {
  type: ModalActionTypes.MODAL_SHOW
  payload: ModalDataType
}

interface IModalHideAction {
  type: ModalActionTypes.MODAL_HIDE
}

export type ModalAction = IModalShowAction | IModalHideAction
