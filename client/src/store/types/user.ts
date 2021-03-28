export type UserAuthType = {
  email: string
  password: string
}

export type UserType = {
  accessToken: string
  userId: string
}

export type UserState = {
  user: UserType
}

export enum UserActionTypes {
  USER_SINGIN = 'USER_SINGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

interface IUserSinginAction {
  type: UserActionTypes.USER_SINGIN
  payload: UserType
}

interface IUserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
}

export type UserAction = IUserSinginAction | IUserLogoutAction
