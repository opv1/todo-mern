export type ListType = {
  readonly owner: string
  title: string
  todos: any[]
  readonly __v: number
  readonly _id: string
}

export interface ListState {
  lists: any
  selectedList: any
}

export enum ListActionTypes {
  LISTS_SET = 'LISTS_SET',
  LIST_SELECTED_SET = 'LIST_SELECTED_SET',
}

interface ListsSetAction {
  type: ListActionTypes.LISTS_SET
  payload: ListType[]
}

interface ListSelectedSetAction {
  type: ListActionTypes.LIST_SELECTED_SET
  payload: ListType | null
}

export type ListAction = ListsSetAction | ListSelectedSetAction
