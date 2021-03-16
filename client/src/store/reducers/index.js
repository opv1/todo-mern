import { combineReducers } from 'redux'
import { alertReducer } from 'store/reducers/alertReducer'
import { appReducer } from 'store/reducers/appReducer'
import { listReducer } from 'store/reducers/listReducer'
import { modalReducer } from 'store/reducers/modalReducer'
import { todoReducer } from 'store/reducers/todoReducer'
import { userReducer } from 'store/reducers/userReducer'

export const rootReducer = combineReducers({
  alert: alertReducer,
  app: appReducer,
  list: listReducer,
  modal: modalReducer,
  todo: todoReducer,
  user: userReducer,
})
