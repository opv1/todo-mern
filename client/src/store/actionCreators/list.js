import { LISTS_SET, LIST_SELECTED_SET } from 'store/types'

export const listsSet = (lists) => ({
  type: LISTS_SET,
  payload: lists,
})

export const listSelectedSet = (list) => ({
  type: LIST_SELECTED_SET,
  payload: list,
})
