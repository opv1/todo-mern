import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestAxios } from 'utils/axios'
import { TodoType } from 'store/types/todo'

export const fetchingTodos = () => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await requestAxios('get', '/api/todo', null, true)

    dispatch(actionCreators.todosSet(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onSelectTodo = (todo: TodoType) => async (dispatch: Dispatch) => {
  dispatch(actionCreators.todoSelectedSet(todo))
}

export const onAddTodo = (data: any, text: string) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await requestAxios(
      'post',
      '/api/todo/add',
      { text, list: data.selectedList._id },
      true
    )

    const copySelectedTodos = [...data.selectedTodos]

    copySelectedTodos.push({ ...response.data.todo })

    dispatch(actionCreators.todosSelectedSet(copySelectedTodos))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const onDeleteTodo = (data: any, todo: TodoType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await requestAxios(
      'delete',
      `/api/todo/${todo._id}`,
      null,
      true
    )

    const copySelectedTodos = [...data.selectedTodos]

    const filteredTodos = copySelectedTodos.filter(
      (copyTodo) => copyTodo._id !== todo._id
    )

    dispatch(actionCreators.todosSelectedSet(filteredTodos))
    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.modalHide())
    dispatch(actionCreators.appLoading())
  }
}

export const onCheckTodo = (
  data: any,
  completed: boolean,
  todo: TodoType
) => async (dispatch: Dispatch) => {
  try {
    const response = await requestAxios(
      'put',
      `/api/todo/${todo._id}`,
      { completed },
      true
    )

    const copySelectedTodos = [...data.selectedTodos]

    const filteredTodos = copySelectedTodos.filter((copyTodo) => {
      if (copyTodo._id === todo._id) {
        copyTodo.completed = !copyTodo.completed
      }

      return copyTodo
    })

    dispatch(actionCreators.todosSelectedSet(filteredTodos))
    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const filteringTodos = (value: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    if (value === 'Completed') {
      const response = await requestAxios(
        'get',
        `/api/todo/${true}`,
        null,
        true
      )

      dispatch(actionCreators.todosSet(response.data))
    } else if (value === 'Uncompleted') {
      const response = await requestAxios(
        'get',
        `/api/todo/${false}`,
        null,
        true
      )

      dispatch(actionCreators.todosSet(response.data))
    } else {
      const response = await requestAxios('get', '/api/todo', null, true)

      dispatch(actionCreators.todosSet(response.data))
    }
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}
