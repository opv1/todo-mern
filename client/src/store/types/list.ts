export type ListType = {
  owner: string
  title: string
  todos: any[]
  _id: string
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
  payload: any
}

interface ListSelectedSetAction {
  type: ListActionTypes.LIST_SELECTED_SET
  payload: any
}

export type ListAction = ListsSetAction | ListSelectedSetAction
