export type TodoType = {
  completed: boolean
  readonly date: string
  readonly list: string
  readonly owner: string
  text: string
  readonly __v: number
  readonly _id: string
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
  payload: TodoType[]
}

interface TodosSelectedSetAction {
  type: TodoActionTypes.TODOS_SELECTED_SET
  payload: TodoType[]
}

interface TodoSelectedSetAction {
  type: TodoActionTypes.TODO_SELECTED_SET
  payload: TodoType | null
}

export type TodoAction =
  | TodosSetAction
  | TodosSelectedSetAction
  | TodoSelectedSetAction
