import actionCreators from 'store/actionCreators/index'

export const onDisplayModal = (data) => (dispatch) => {
  dispatch(actionCreators.modalShow(data))
}

export const onCloseModal = () => (dispatch) => {
  dispatch(actionCreators.modalHide())
}
