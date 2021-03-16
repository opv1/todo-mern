import { USER_LOGIN, USER_LOGOUT } from 'store/types'

const initialState = {
  user: { token: null, userId: null },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: { ...action.payload },
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: { token: null, userId: null },
      }
    default:
      return state
  }
}
