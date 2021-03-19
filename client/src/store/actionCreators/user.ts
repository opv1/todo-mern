import { UserState, UserAction, UserActionTypes } from 'store/types/user'

export const userLogin = (data: any): UserAction => ({
  type: UserActionTypes.USER_LOGIN,
  payload: data,
})

export const userLogout = (): UserAction => ({
  type: UserActionTypes.USER_LOGOUT,
})
