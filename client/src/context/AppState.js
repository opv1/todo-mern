import React, { useReducer, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { AppContext } from 'context/AppContext'
import { appReducer } from 'context/appReducer'
import { useAuth } from 'hooks/useAuth'
import { useHttp } from 'hooks/useHttp'
import { useRoutes } from 'hooks/useRoutes'
import {
  SET_LISTS,
  SET_SELECTED_LIST,
  SET_SELECTED_TODOS,
  SET_SELECTED_TODO,
  SET_TODOS,
  SET_SHOW_MODAL,
  SET_DATA_MODAL,
} from 'context/types'

export const AppState = ({ children }) => {
  const initialState = {
    lists: [],
    selectedList: null,
    selectedTodos: [],
    selectedTodo: {},
    todos: [],
    showModal: false,
    dataModal: {
      type: '',
      item: '',
    },
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const {
    lists,
    selectedList,
    selectedTodos,
    selectedTodo,
    todos,
    showModal,
    dataModal,
  } = state

  const history = useHistory()
  const {
    loading,
    message,
    showMessage,
    displayMessage,
    clearMessage,
    request,
  } = useHttp()
  const { token, login, logout, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  const onShowModal = (payload) => {
    dispatch({ type: SET_SHOW_MODAL, payload })
  }

  const onSingup = async (form) => {
    try {
      await request('/api/auth/singup', 'POST', { ...form })
    } catch (err) {
      console.log(err)
    }
  }

  const onLogin = async (form) => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })

      displayMessage(false)

      login(data.token, data.userId)
    } catch (err) {
      console.log(err)
    }
  }

  const checkAuth = async () => {
    try {
      const data = await request('/api/auth', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      console.log(data)

      // return jwtDecode(data.token)
    } catch (err) {
      console.log('err', err)
    }
  }

  const fetchLists = useCallback(async () => {
    try {
      const lists = await request('/api/list/', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({ type: SET_LISTS, payload: lists })
    } catch (err) {
      console.log(err)
    }
  }, [token, request])

  const fetchTodos = useCallback(async () => {
    try {
      const todos = await request('/api/todo/', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({ type: SET_TODOS, payload: todos })
    } catch (err) {
      console.log(err)
    }
  }, [token, request])

  const onAddList = async (title) => {
    try {
      const copyLists = [...lists]

      const data = await request(
        '/api/list/add',
        'POST',
        { title },
        {
          Authorization: `Bearer ${token}`,
        },
        {
          loading: false,
        }
      )

      copyLists.push({ ...data.list })

      dispatch({ type: SET_LISTS, payload: copyLists })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedList = async (list) => {
    dispatch({ type: SET_SELECTED_LIST, payload: list })

    try {
      const todos = await request(`/api/todo/list/${list._id}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({ type: SET_SELECTED_TODOS, payload: todos })
    } catch (err) {
      console.log(err)
    }
  }

  const onAddTodo = async (text) => {
    try {
      const copyTodos = [...selectedTodos]

      const data = await request(
        '/api/todo/add',
        'POST',
        { text, list: selectedList._id },
        {
          Authorization: `Bearer ${token}`,
        },
        {
          loading: false,
        }
      )

      copyTodos.push({ ...data.todo })

      dispatch({ type: SET_SELECTED_TODOS, payload: copyTodos })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedTodo = (todo) => {
    dispatch({ type: SET_SELECTED_TODO, payload: todo })

    history.push(`/todo/${todo._id}`)
  }

  const onDeleteList = async (list) => {
    try {
      const todos = await request(
        '/api/todo/',
        'DELETE',
        { list: list._id },
        {
          Authorization: `Bearer ${token}`,
        }
      )

      todos.forEach(async (todo) => {
        await request(`/api/todo/${todo._id}`, 'DELETE', null, {
          Authorization: `Bearer ${token}`,
        })
      })

      await request(`/api/list/${list._id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`,
      })

      const copyLists = [...lists]

      const filteredLists = copyLists.filter(
        (copyList) => copyList._id !== list._id
      )

      dispatch({ type: SET_LISTS, payload: filteredLists })

      dispatch({ type: SET_SELECTED_LIST, payload: null })

      onShowModal(false)
    } catch (err) {
      console.log(err)
    }
  }

  const onDeleteTodo = async (todo) => {
    try {
      await request(`/api/todo/${todo._id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`,
      })

      const copyTodos = [...selectedTodos]

      const filteredTodos = copyTodos.filter(
        (copyTodo) => copyTodo._id !== todo._id
      )

      dispatch({ type: SET_SELECTED_TODOS, payload: filteredTodos })

      onShowModal(false)
    } catch (err) {
      console.log(err)
    }
  }

  const onDisplayModal = (event, type, item) => {
    event.stopPropagation()

    onShowModal(true)

    dispatch({ type: SET_DATA_MODAL, payload: { type, item } })
  }

  const onCheckTodo = async (event, todo) => {
    try {
      await request(
        `/api/todo/${todo._id}`,
        'PUT',
        { completed: event.target.checked },
        {
          Authorization: `Bearer ${token}`,
        },
        { loading: false }
      )

      const copyTodos = [...selectedTodos]

      const filteredTodos = copyTodos.filter((copyTodo) => {
        if (copyTodo._id === todo._id) {
          copyTodo.completed = !copyTodo.completed
        }

        return copyTodo
      })

      dispatch({ type: SET_SELECTED_TODOS, payload: filteredTodos })
    } catch (err) {
      console.log(err)
    }
  }

  const filteringTodos = async (value) => {
    try {
      if (value === 'Completed') {
        const todos = await request(`/api/todo/${true}`, 'GET', null, {
          Authorization: `Bearer ${token}`,
        })

        dispatch({ type: SET_TODOS, payload: todos })
      } else if (value === 'Uncompleted') {
        const todos = await request(`/api/todo/${false}`, 'GET', null, {
          Authorization: `Bearer ${token}`,
        })

        dispatch({ type: SET_TODOS, payload: todos })
      } else {
        const todos = await request('/api/todo/', 'GET', null, {
          Authorization: `Bearer ${token}`,
        })

        dispatch({ type: SET_TODOS, payload: todos })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AppContext.Provider
      value={{
        lists,
        selectedList,
        selectedTodos,
        selectedTodo,
        todos,
        showModal,
        dataModal,
        history,
        loading,
        message,
        showMessage,
        displayMessage,
        clearMessage,
        login,
        logout,
        ready,
        isAuthenticated,
        routes,
        onShowModal,
        onSingup,
        onLogin,
        checkAuth,
        fetchLists,
        fetchTodos,
        onAddList,
        onSelectedList,
        onAddTodo,
        onSelectedTodo,
        onDeleteList,
        onDeleteTodo,
        onDisplayModal,
        onCheckTodo,
        filteringTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
