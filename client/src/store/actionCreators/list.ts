import { ListAction, ListActionTypes } from 'store/types/list'

export const listsSet = (lists: any): ListAction => ({
  type: ListActionTypes.LISTS_SET,
  payload: lists,
})

export const listSelectedSet = (list: any): ListAction => ({
  type: ListActionTypes.LIST_SELECTED_SET,
  payload: list,
})
