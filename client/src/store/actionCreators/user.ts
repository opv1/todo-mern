import { UserType, UserAction, UserActionTypes } from 'store/types/user'

export const userLogin = (user: UserType): UserAction => ({
  type: UserActionTypes.USER_LOGIN,
  payload: user,
})

export const userLogout = (): UserAction => ({
  type: UserActionTypes.USER_LOGOUT,
})
