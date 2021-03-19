import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const onDisplayModal = (data: any) => (dispatch: Dispatch) => {
  dispatch(actionCreators.modalShow(data))
}

export const onCloseModal = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.modalHide())
}
