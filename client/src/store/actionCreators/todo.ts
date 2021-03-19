import { TodoType, TodoAction, TodoActionTypes } from 'store/types/todo'

export const todosSet = (todos: TodoType[]): TodoAction => ({
  type: TodoActionTypes.TODOS_SET,
  payload: todos,
})

export const todosSelectedSet = (todos: TodoType[]): TodoAction => ({
  type: TodoActionTypes.TODOS_SELECTED_SET,
  payload: todos,
})

export const todoSelectedSet = (todo: TodoType | null): TodoAction => ({
  type: TodoActionTypes.TODO_SELECTED_SET,
  payload: todo,
})
