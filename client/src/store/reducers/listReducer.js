import { LISTS_SET, LIST_SELECTED_SET } from 'store/types'

const initialState = {
  lists: [],
  selectedList: null,
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTS_SET:
      return {
        ...state,
        lists: action.payload,
      }
    case LIST_SELECTED_SET:
      return {
        ...state,
        selectedList: action.payload,
      }
    default:
      return state
  }
}
