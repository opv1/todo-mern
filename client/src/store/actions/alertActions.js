import actionCreators from 'store/actionCreators/index'

export const onCloseAlert = () => (dispatch) => {
  dispatch(actionCreators.alertHide())
}
