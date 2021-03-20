import { UserType, UserAction, UserActionTypes } from 'store/types/user'

export const userSingin = (user: UserType): UserAction => ({
  type: UserActionTypes.USER_SINGIN,
  payload: user,
})

export const userLogout = (): UserAction => ({
  type: UserActionTypes.USER_LOGOUT,
})
