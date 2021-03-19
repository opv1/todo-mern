import { TodoAction, TodoActionTypes } from 'store/types/todo'

export const todosSet = (todos: any): TodoAction => ({
  type: TodoActionTypes.TODOS_SET,
  payload: todos,
})

export const todosSelectedSet = (todos: any): TodoAction => ({
  type: TodoActionTypes.TODOS_SELECTED_SET,
  payload: todos,
})

export const todoSelectedSet = (todo: any): TodoAction => ({
  type: TodoActionTypes.TODO_SELECTED_SET,
  payload: todo,
})
