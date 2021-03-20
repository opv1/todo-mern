import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestFetch } from 'utils/fetch'
import { ListType } from 'store/types/list'
import { TodoType } from 'store/types/todo'

export const fetchingLists = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestFetch('get', '/api/list', null, true)

    dispatch(actionCreators.listsSet(res))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onSelectList = (list: ListType) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())
    dispatch(actionCreators.listSelectedSet(list))

    const res = await requestFetch(
      'get',
      `/api/todo/list/${list._id}`,
      null,
      true
    )

    dispatch(actionCreators.todosDisplayedSet(res))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onAddList = (data: any, title: string) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await requestFetch('post', '/api/list/add', { title }, true)

    const copyLists = [...data.lists]

    copyLists.push({ ...res.list })

    dispatch(actionCreators.listsSet(copyLists))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onDeleteList = (data: any, list: ListType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await requestFetch(
      'delete',
      '/api/todo',
      { list: list._id },
      true
    )

    if (response.length !== 0) {
      response.forEach(async (todo: TodoType) => {
        await requestFetch('delete', `/api/todo/${todo._id}`, null, true)
      })
    }

    const res = await requestFetch(
      'delete',
      `/api/list/${list._id}`,
      null,
      true
    )

    const filteredLists = [...data.lists].filter(
      (copyList) => copyList._id !== list._id
    )

    if (data.selectedList && data.selectedList._id === list._id) {
      dispatch(actionCreators.listSelectedSet(null))
    }

    dispatch(actionCreators.listsSet(filteredLists))
    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.modalHide())
    dispatch(actionCreators.appLoading())
  }
}
