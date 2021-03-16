import { TODOS_SET, TODOS_SELECTED_SET, TODO_SELECTED_SET } from 'store/types'

const initialState = {
  todos: [],
  selectedTodos: [],
  selectedTodo: {},
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_SET:
      return {
        ...state,
        todos: action.payload,
      }
    case TODOS_SELECTED_SET:
      return {
        ...state,
        selectedTodos: action.payload,
      }
    case TODO_SELECTED_SET:
      return {
        ...state,
        selectedTodo: action.payload,
      }
    default:
      return state
  }
}
