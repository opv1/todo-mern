import React, { useReducer, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from './AppContext'
import { appReducer } from './appReducer'
import { useAuth } from '../hooks/useAuth'
import { useHttp } from '../hooks/useHttp'
import { useAlert } from '../hooks/useAlert'
import { useRoutes } from '../routes'
import {
  SET_LISTS,
  SET_SELECTED_LIST,
  SET_SELECTED_TODOS,
  SET_CHOOSED_TODO,
  SET_TODOS,
} from './types'

export const AppState = ({ children }) => {
  const initialState = {
    lists: [],
    selectedList: null,
    selectedTodos: [],
    selectedTodo: {},
    todos: [],
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const { lists, selectedList, selectedTodos, selectedTodo, todos } = state

  const history = useHistory()
  const { loading, error, request, clearError } = useHttp()
  const alert = useAlert()
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  const onSingup = async (form) => {
    try {
      const data = await request('/api/auth/singup', 'POST', { ...form })

      alert(data.message)
    } catch (err) {
      console.log(err)
    }
  }

  const onLogin = async (form) => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })

      login(data.token, data.userId)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchLists = useCallback(async () => {
    try {
      const lists = await request('/api/list/all', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({
        type: SET_LISTS,
        payload: lists,
      })
    } catch (err) {
      console.log(err)
    }
  }, [token, request])

  const fetchTodos = useCallback(async () => {
    try {
      const todos = await request('/api/todo/all', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({
        type: SET_TODOS,
        payload: todos,
      })
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
        }
      )

      copyLists.push({ ...data.list })

      dispatch({
        type: SET_LISTS,
        payload: copyLists,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedList = async (list) => {
    dispatch({
      type: SET_SELECTED_LIST,
      payload: list,
    })

    try {
      const todos = await request(`api/list/todos/${list._id}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      })

      dispatch({
        type: SET_SELECTED_TODOS,
        payload: todos,
      })
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
        { text, listId: selectedList._id },
        {
          Authorization: `Bearer ${token}`,
        }
      )

      copyTodos.push({ ...data.todo })

      dispatch({
        type: SET_SELECTED_TODOS,
        payload: copyTodos,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectedTodo = (todo) => {
    dispatch({
      type: SET_CHOOSED_TODO,
      payload: todo,
    })

    history.push(`/todo/${todo._id}`)
  }

  return (
    <AppContext.Provider
      value={{
        lists,
        selectedList,
        selectedTodos,
        selectedTodo,
        todos,
        history,
        loading,
        error,
        clearError,
        alert,
        login,
        logout,
        ready,
        isAuthenticated,
        routes,
        onSingup,
        onLogin,
        fetchLists,
        fetchTodos,
        onAddList,
        onSelectedList,
        onAddTodo,
        onSelectedTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
