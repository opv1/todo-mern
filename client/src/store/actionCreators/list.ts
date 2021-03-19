import { ListType, ListAction, ListActionTypes } from 'store/types/list'

export const listsSet = (lists: ListType[]): ListAction => ({
  type: ListActionTypes.LISTS_SET,
  payload: lists,
})

export const listSelectedSet = (list: ListType | null): ListAction => ({
  type: ListActionTypes.LIST_SELECTED_SET,
  payload: list,
})
