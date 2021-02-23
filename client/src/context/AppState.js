import React, { useReducer, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { AppContext } from 'context/AppContext'
import { appReducer } from 'context/appReducer'
import { useAuth } from 'hooks/useAuth'
import { useHttp } from 'hooks/useHttp'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useRoutes } from 'hooks/useRoutes'
import {
  SET_LISTS,
  SET_SELECTED_LIST,
  SET_TODOS,
  SET_SELECTED_TODOS,
  SET_SELECTED_TODO,
  SET_SHOW_MODAL,
  SET_DATA_MODAL,
} from 'context/types'

export const AppState = ({ children }) => {
  const initialState = {
    lists: [],
    selectedList: null,
    todos: [],
    selectedTodos: [],
    selectedTodo: {},
    showModal: false,
    dataModal: { type: '', item: '' },
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const {
    lists,
    selectedList,
    todos,
    selectedTodos,
    selectedTodo,
    showModal,
    dataModal,
  } = state

  const history = useHistory()
  const { token, ready, login, logout } = useAuth()
  const { loading, message, showMessage, displayMessage, request } = useHttp()
  const { storageObject } = useLocalStorage()
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
      if (storageObject && storageObject.token) {
        const data = await request('/api/auth', 'GET', null, {
          Authorization: `Bearer ${storageObject.token}`,
        })

        const { userId } = jwtDecode(data.token)

        login(data.token, userId)
      }
    } catch (err) {
      console.log(err)
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

  const onAddTodo = async (text) => {
    try {
      const copySelectedTodos = [...selectedTodos]

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

      copySelectedTodos.push({ ...data.todo })

      dispatch({ type: SET_SELECTED_TODOS, payload: copySelectedTodos })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedList = async (event, list) => {
    event.stopPropagation()

    try {
      dispatch({ type: SET_SELECTED_LIST, payload: list })

      const todos = await request(`/api/todo/list/${list._id}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({ type: SET_SELECTED_TODOS, payload: todos })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedTodo = (event, todo) => {
    event.stopPropagation()

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

      if (list._id === selectedList._id) {
        dispatch({ type: SET_SELECTED_LIST, payload: null })
      }

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

      const copySelectedTodos = [...selectedTodos]

      const filteredTodos = copySelectedTodos.filter(
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

      const copySelectedTodos = [...selectedTodos]

      const filteredTodos = copySelectedTodos.filter((copyTodo) => {
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
        todos,
        selectedTodos,
        selectedTodo,
        showModal,
        dataModal,
        history,
        ready,
        login,
        logout,
        loading,
        message,
        showMessage,
        displayMessage,
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
