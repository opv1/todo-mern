import {
  SET_LISTS,
  SET_SELECTED_LIST,
  SET_SELECTED_TODOS,
  SET_CHOOSED_TODO,
  SET_TODOS,
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
  [SET_CHOOSED_TODO]: (state, { payload }) => ({
    ...state,
    selectedTodo: payload,
  }),
  [SET_TODOS]: (state, { payload }) => ({
    ...state,
    todos: payload,
  }),
  DEFAULT: (state) => state,
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}
