import { ModalState, ModalAction, ModalActionTypes } from 'store/types/modal'

const initialState = {
  modal: false,
  data: { type: '', item: {} },
}

const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ModalActionTypes.MODAL_SHOW:
      return {
        ...state,
        modal: true,
        data: { ...action.payload },
      }
    case ModalActionTypes.MODAL_HIDE:
      return {
        ...state,
        modal: false,
      }
    default:
      return state
  }
}

export default modalReducer
