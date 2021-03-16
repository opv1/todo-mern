import actionCreators from 'store/actionCreators/index'
import { request } from 'utils/axios'

export const fetchingLists = () => async (dispatch) => {
  try {
    const response = await request('get', '/api/list', null, true)

    dispatch(actionCreators.listsSet(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const onSelectList = (list) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())
    dispatch(actionCreators.listSelectedSet(list))

    const response = await request(
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

export const onAddList = (data, title) => async (dispatch) => {
  try {
    const response = await request('post', '/api/list/add', { title }, true)

    const copyLists = [...data.lists]

    copyLists.push({ ...response.data.list })

    dispatch(actionCreators.listsSet(copyLists))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const onDeleteList = (data, list) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await request('delete', '/api/todo', { list: list._id }, true)

    if (res.data.length !== 0) {
      res.data.forEach(async (todo) => {
        await request('delete', `/api/todo/${todo._id}`, null, true)
      })
    }

    const response = await request(
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
