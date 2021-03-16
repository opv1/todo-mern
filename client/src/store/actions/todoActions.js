import actionCreators from 'store/actionCreators/index'
import { request } from 'utils/axios'

export const fetchingTodos = () => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await request('get', '/api/todo', null, true)

    dispatch(actionCreators.todosSet(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onSelectTodo = (todo) => async (dispatch) => {
  dispatch(actionCreators.todoSelectedSet(todo))
}

export const onAddTodo = (data, text) => async (dispatch) => {
  try {
    const response = await request(
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

export const onDeleteTodo = (data, todo) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await request(
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

export const onCheckTodo = (data, completed, todo) => async (dispatch) => {
  try {
    const response = await request(
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

export const filteringTodos = (value) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    if (value === 'Completed') {
      const response = await request('get', `/api/todo/${true}`, null, true)

      dispatch(actionCreators.todosSet(response.data))
    } else if (value === 'Uncompleted') {
      const response = await request('get', `/api/todo/${false}`, null, true)

      dispatch(actionCreators.todosSet(response.data))
    } else {
      const response = await request('get', '/api/todo', null, true)

      dispatch(actionCreators.todosSet(response.data))
    }
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}
