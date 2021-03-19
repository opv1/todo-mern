import { ListState, ListAction, ListActionTypes } from 'store/types/list'

const initialState = {
  lists: [],
  selectedList: null,
}

const listReducer = (state = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case ListActionTypes.LISTS_SET:
      return {
        ...state,
        lists: action.payload,
      }
    case ListActionTypes.LIST_SELECTED_SET:
      return {
        ...state,
        selectedList: action.payload,
      }
    default:
      return state
  }
}

export default listReducer
