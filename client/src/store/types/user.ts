export type FormType = {
  email: string
  password: string
}

type UserType = {
  accessToken: string
  userId: string
}

export interface UserState {
  user: UserType
}

export enum UserActionTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN
  payload: UserType
}

interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
}

export type UserAction = UserLoginAction | UserLogoutAction
