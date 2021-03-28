export type TodoType = {
  completed: boolean
  readonly date: string
  readonly list: string
  readonly owner: string
  text: string
  readonly __v: number
  readonly _id: string
}

export type TodoState = {
  todos: any
  displayedTodos: any
  selectedTodos: any
  selectedTodo: any
}

export enum TodoActionTypes {
  TODOS_SET = 'TODOS_SET',
  TODOS_DISPLAYED_SET = 'TODOS_DISPLAYED_SET',
  TODOS_SELECTED_SET = 'TODOS_SELECTED_SET',
  TODO_SELECTED_SET = 'TODO_SELECTED_SET',
}

interface ITodosSetAction {
  type: TodoActionTypes.TODOS_SET
  payload: TodoType[]
}

interface ITodosDisplayedSetAction {
  type: TodoActionTypes.TODOS_DISPLAYED_SET
  payload: TodoType[]
}

interface ITodosSelectedSetAction {
  type: TodoActionTypes.TODOS_SELECTED_SET
  payload: TodoType[]
}

interface ITodoSelectedSetAction {
  type: TodoActionTypes.TODO_SELECTED_SET
  payload: TodoType | null
}

export type TodoAction =
  | ITodosSetAction
  | ITodosDisplayedSetAction
  | ITodosSelectedSetAction
  | ITodoSelectedSetAction
