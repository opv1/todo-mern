import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { requestFetch } from 'utils/fetch'
import { setStorage, removeStorage } from 'utils/localStorage'
import { UserAuthType } from 'store/types/user'

export const onSingupUser = (form: UserAuthType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await requestFetch(
      'post',
      '/api/auth/singup',
      { ...form },
      false
    )

    dispatch(actionCreators.alertShow({ type: 'success', text: res.message }))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLoginUser = (form: UserAuthType) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(actionCreators.appLoading())

    const res = await requestFetch(
      'post',
      '/api/auth/login',
      { ...form },
      false
    )

    setStorage(res)

    dispatch(actionCreators.userLogin(res))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const onLogoutUser = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.userLogout())

  removeStorage()
}

export const checkAuthUser = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestFetch('get', '/api/auth', null, true)

    setStorage(res)

    dispatch(actionCreators.userLogin(res))
  } catch (err) {
    dispatch(actionCreators.alertShow({ type: 'error', text: err.message }))
  } finally {
    dispatch(actionCreators.appReady(true))
  }
}
