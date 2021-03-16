import { MODAL_SHOW, MODAL_HIDE } from 'store/types'

const initialState = {
  modal: false,
  data: { type: '', item: {} },
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        modal: true,
        data: { ...action.payload },
      }
    case MODAL_HIDE:
      return {
        ...state,
        modal: false,
      }
    default:
      return state
  }
}
