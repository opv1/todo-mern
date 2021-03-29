import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const initialHistory = (history: any) => (dispatch: Dispatch) => {
  dispatch(actionCreators.appHistory(history))
}
