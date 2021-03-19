import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const onCloseAlert = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.alertHide())
}
