import {
  SET_LISTS,
  SET_SELECTED_LIST,
  SET_SELECTED_TODOS,
  SET_SELECTED_TODO,
  SET_TODOS,
  SET_SHOW_MODAL,
  SET_DATA_MODAL,
  SET_SHOW_ALERT,
  SET_DATA_ALERT,
} from './types'

const handlers = {
  [SET_LISTS]: (state, { payload }) => ({
    ...state,
    lists: payload,
  }),
  [SET_SELECTED_LIST]: (state, { payload }) => ({
    ...state,
    selectedList: payload,
  }),
  [SET_SELECTED_TODOS]: (state, { payload }) => ({
    ...state,
    selectedTodos: payload,
  }),
  [SET_SELECTED_TODO]: (state, { payload }) => ({
    ...state,
    selectedTodo: payload,
  }),
  [SET_TODOS]: (state, { payload }) => ({
    ...state,
    todos: payload,
  }),
  [SET_SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    showModal: payload,
  }),
  [SET_DATA_MODAL]: (state, { payload }) => ({
    ...state,
    dataModal: {
      type: payload.type,
      item: payload.item,
    },
  }),
  [SET_SHOW_ALERT]: (state, { payload }) => ({
    ...state,
    showAlert: payload,
  }),
  [SET_DATA_ALERT]: (state, { payload }) => ({
    ...state,
    dataAlert: {
      type: payload.type,
      text: payload.text,
    },
  }),
  DEFAULT: (state) => state,
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}
