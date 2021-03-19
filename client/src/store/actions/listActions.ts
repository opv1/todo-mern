import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestAxios } from 'utils/axios'

export const fetchingLists = () => async (dispatch: Dispatch) => {
  try {
    const response = await requestAxios('get', '/api/list', null, true)

    dispatch(actionCreators.listsSet(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const onSelectList = (list: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())
    dispatch(actionCreators.listSelectedSet(list))

    const response = await requestAxios(
      'get',
      `/api/todo/list/${list._id}`,
      null,
      true
    )

    dispatch(actionCreators.todosSelectedSet(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onAddList = (data: any, title: string) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await requestAxios(
      'post',
      '/api/list/add',
      { title },
      true
    )

    const copyLists = [...data.lists]

    copyLists.push({ ...response.data.list })

    dispatch(actionCreators.listsSet(copyLists))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const onDeleteList = (data: any, list: any) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await requestAxios(
      'delete',
      '/api/todo',
      { list: list._id },
      true
    )

    if (res.data.length !== 0) {
      res.data.forEach(async (todo: any) => {
        await requestAxios('delete', `/api/todo/${todo._id}`, null, true)
      })
    }

    const response = await requestAxios(
      'delete',
      `/api/list/${list._id}`,
      null,
      true
    )

    const copyLists = [...data.lists]

    const filteredLists = copyLists.filter(
      (copyList) => copyList._id !== list._id
    )

    if (data.selectedList && data.selectedList._id === list._id) {
      dispatch(actionCreators.listSelectedSet(null))
    }

    dispatch(actionCreators.listsSet(filteredLists))
    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.modalHide())
    dispatch(actionCreators.appLoading())
  }
}
