import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestAxios } from 'utils/axios'
import { setStorage, removeStorage } from 'utils/localStorage'
import { UserAuthType } from 'store/types/user'

export const checkAuthUser = () => async (dispatch: Dispatch) => {
  try {
    const response = await requestAxios('get', '/api/auth', null, true)

    setStorage(response.data)

    dispatch(actionCreators.userLogin(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appReady(true))
  }
}

export const onSingupUser = (form: UserAuthType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await requestAxios(
      'post',
      '/api/auth/singup',
      { ...form },
      false
    )

    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLoginUser = (form: UserAuthType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const response = await requestAxios(
      'post',
      '/api/auth/login',
      { ...form },
      false
    )

    setStorage(response.data)

    dispatch(actionCreators.userLogin(response.data))
  } catch (err) {
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLogoutUser = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.userLogout())

  removeStorage()
}
