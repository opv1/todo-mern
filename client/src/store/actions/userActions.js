import actionCreators from 'store/actionCreators/index'
import { request } from 'utils/axios'
import { setStorage, removeStorage } from 'utils/localStorage'

export const checkAuthUser = () => async (dispatch) => {
  try {
    const response = await request('get', '/api/auth', null, true)

    setStorage(response.data)

    dispatch(actionCreators.userLogin(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appReady(true))
  }
}

export const onSingupUser = (form) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await request('post', '/api/auth/singup', { ...form })

    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLoginUser = (form) => async (dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await request('post', '/api/auth/login', { ...form })

    setStorage(response.data)

    dispatch(actionCreators.userLogin(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLogoutUser = () => (dispatch) => {
  dispatch(actionCreators.userLogout())

  removeStorage()
}
