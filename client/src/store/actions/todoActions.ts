import { Dispatch } from 'redux'
import { store } from 'store/index'
import actionCreators from 'store/actionCreators/index'
import { TodoType } from 'store/types/todo'
import { requestFetch } from 'utils/requestFetch'

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

export const onAddTodo = (text: string) => async (dispatch: Dispatch) => {
  try {
    const { selectedList } = store.getState().list

    const res = await requestFetch(
      'post',
      '/api/todo/add',
      { text, list: selectedList._id },
      true
    )

    const { displayedTodos } = store.getState().todo

    const copyDisplayedTodos = [...displayedTodos]

    copyDisplayedTodos.push({ ...res.todo })

    dispatch(actionCreators.todosDisplayedSet(copyDisplayedTodos))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  }
}

export const onDeleteTodo = (todo: TodoType) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await requestFetch(
      'delete',
      `/api/todo/${todo._id}`,
      null,
      true
    )

    const { displayedTodos } = store.getState().todo

    const filteredTodos = [...displayedTodos].filter(
      (copyTodo) => copyTodo._id !== todo._id
    )

    dispatch(actionCreators.todosDisplayedSet(filteredTodos))
    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.modalHide())
    dispatch(actionCreators.appLoading())
  }
}

export const onCheckTodo = (completed: boolean, todo: TodoType) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await requestFetch(
      'put',
      `/api/todo/${todo._id}`,
      { completed },
      true
    )

    const { displayedTodos } = store.getState().todo

    const filteredTodos = [...displayedTodos].filter((copyTodo) => {
      if (copyTodo._id === todo._id) {
        copyTodo.completed = !copyTodo.completed
      }

      return copyTodo
    })

    dispatch(actionCreators.todosDisplayedSet(filteredTodos))
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

      dispatch(actionCreators.todosSelectedSet(res))
    } else if (value === 'Uncompleted') {
      const res = await requestFetch('get', `/api/todo/${false}`, null, true)

      dispatch(actionCreators.todosSelectedSet(res))
    } else {
      const res = await requestFetch('get', '/api/todo', null, true)

      dispatch(actionCreators.todosSelectedSet(res))
    }
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}
