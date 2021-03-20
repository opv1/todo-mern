import { TodoState, TodoAction, TodoActionTypes } from 'store/types/todo'

const initialState = {
  todos: [],
  displayedTodos: [],
  selectedTodos: [],
  selectedTodo: null,
}

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.TODOS_SET:
      return {
        ...state,
        todos: action.payload,
      }
    case TodoActionTypes.TODOS_DISPLAYED_SET:
      return {
        ...state,
        displayedTodos: action.payload,
      }
    case TodoActionTypes.TODOS_SELECTED_SET:
      return {
        ...state,
        selectedTodos: action.payload,
      }
    case TodoActionTypes.TODO_SELECTED_SET:
      return {
        ...state,
        selectedTodo: action.payload,
      }
    default:
      return state
  }
}

export default todoReducer
