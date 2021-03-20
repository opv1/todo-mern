import { UserState, UserAction, UserActionTypes } from 'store/types/user'

const initialState = {
  user: { accessToken: '', userId: '' },
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_SINGIN:
      return {
        ...state,
        user: { ...action.payload },
      }
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
        user: { accessToken: '', userId: '' },
      }
    default:
      return state
  }
}

export default userReducer
