export type UserAuthType = {
  email: string
  password: string
}

export type UserType = {
  accessToken: string
  userId: string
}

export interface UserState {
  user: UserType
}

export enum UserActionTypes {
  USER_SINGIN = 'USER_SINGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

interface UserSinginAction {
  type: UserActionTypes.USER_SINGIN
  payload: UserType
}

interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
}

export type UserAction = UserSinginAction | UserLogoutAction
