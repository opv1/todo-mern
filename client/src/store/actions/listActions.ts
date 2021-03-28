import { Dispatch } from 'redux'
import { store } from 'store/index'
import actionCreators from 'store/actionCreators/index'
import { ListType } from 'store/types/list'
import { TodoType } from 'store/types/todo'
import { requestFetch } from 'utils/requestFetch'

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

export const onAddList = (title: string) => async (dispatch: Dispatch) => {
  try {
    const res = await requestFetch('post', '/api/list/add', { title }, true)

    const { lists } = store.getState().list

    const copyLists = [...lists]

    copyLists.push({ ...res.list })

    dispatch(actionCreators.listsSet(copyLists))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onDeleteList = (list: ListType) => async (dispatch: Dispatch) => {
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

    const { lists, selectedList } = store.getState().list

    const filteredLists = [...lists].filter(
      (copyList) => copyList._id !== list._id
    )

    if (selectedList && selectedList._id === list._id) {
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

export const onRenameList = (title: string) => async (dispatch: Dispatch) => {
  try {
    const { lists, selectedList } = store.getState().list

    const res = await requestFetch(
      'put',
      `/api/list/${selectedList._id}`,
      { title },
      true
    )

    const filteredLists = [...lists].filter((list) => {
      if (list._id === selectedList._id) {
        list.title = title
      }

      return list
    })

    dispatch(actionCreators.listsSet(filteredLists))
    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}
