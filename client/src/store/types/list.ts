export type ListType = {
  readonly owner: string
  title: string
  todos: any[]
  readonly __v: number
  readonly _id: string
}

export type ListState = {
  lists: any
  selectedList: any
}

export enum ListActionTypes {
  LISTS_SET = 'LISTS_SET',
  LIST_SELECTED_SET = 'LIST_SELECTED_SET',
}

interface IListsSetAction {
  type: ListActionTypes.LISTS_SET
  payload: ListType[]
}

interface IListSelectedSetAction {
  type: ListActionTypes.LIST_SELECTED_SET
  payload: ListType | null
}

export type ListAction = IListsSetAction | IListSelectedSetAction
