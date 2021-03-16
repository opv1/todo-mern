import { TODOS_SET, TODOS_SELECTED_SET, TODO_SELECTED_SET } from 'store/types'

export const todosSet = (todos) => ({
  type: TODOS_SET,
  payload: todos,
})

export const todosSelectedSet = (todos) => ({
  type: TODOS_SELECTED_SET,
  payload: todos,
})

export const todoSelectedSet = (todo) => ({
  type: TODO_SELECTED_SET,
  payload: todo,
})
