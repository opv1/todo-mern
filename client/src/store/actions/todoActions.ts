import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestFetch } from 'utils/fetch'
import { TodoType } from 'store/types/todo'

export const fetchingTodos = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestFetch('get', '/api/todo', null, true)

    dispatch(actionCreators.todosSet(res))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onSelectTodo = (todo: TodoType) => async (dispatch: Dispatch) => {
  dispatch(actionCreators.todoSelectedSet(todo))
}

export const onAddTodo = (data: any, text: string) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await requestFetch(
      'post',
      '/api/todo/add',
      { text, list: data.selectedList._id },
      true
    )

    const copySelectedTodos = [...data.selectedTodos]

    copySelectedTodos.push({ ...res.todo })

    dispatch(actionCreators.todosSelectedSet(copySelectedTodos))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onDeleteTodo = (data: any, todo: TodoType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await requestFetch(
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
    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
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
    const res = await requestFetch(
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
    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const filteringTodos = (value: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    if (value === 'Completed') {
      const res = await requestFetch('get', `/api/todo/${true}`, null, true)

      dispatch(actionCreators.todosSet(res))
    } else if (value === 'Uncompleted') {
      const res = await requestFetch('get', `/api/todo/${false}`, null, true)

      dispatch(actionCreators.todosSet(res))
    } else {
      const res = await requestFetch('get', '/api/todo', null, true)

      dispatch(actionCreators.todosSet(res))
    }
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}
