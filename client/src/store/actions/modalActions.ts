import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'
import { ModalDataType } from 'store/types/modal'

export const onDisplayModal = (data: ModalDataType) => (dispatch: Dispatch) => {
  dispatch(actionCreators.modalShow(data))
}

export const onCloseModal = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.modalHide())
}
