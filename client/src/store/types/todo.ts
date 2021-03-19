export type TodoType = {
  completed: boolean
  date: string
  list: string
  text: string
  _id: string
}

export interface TodoState {
  todos: any
  selectedTodos: any
  selectedTodo: any
}

export enum TodoActionTypes {
  TODOS_SET = 'TODOS_SET',
  TODOS_SELECTED_SET = 'TODOS_SELECTED_SET',
  TODO_SELECTED_SET = 'TODO_SELECTED_SET',
}

interface TodosSetAction {
  type: TodoActionTypes.TODOS_SET
  payload: any
}

interface TodosSelectedSetAction {
  type: TodoActionTypes.TODOS_SELECTED_SET
  payload: any
}

interface TodoSelectedSetAction {
  type: TodoActionTypes.TODO_SELECTED_SET
  payload: any
}

export type TodoAction =
  | TodosSetAction
  | TodosSelectedSetAction
  | TodoSelectedSetAction
