import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'
import { ButtonComponent } from './UI4/index'

function ModalComponent() {
  const {
    loading,
    showModal,
    dataModal,
    onShowModal,
    onDeleteList,
    onDeleteTodo,
  } = useContext(AppContext)

  let body = ''
  let onClickModal = function () {}

  if (dataModal.type === 'todo') {
    body = dataModal.item.text
    onClickModal = onDeleteTodo
  } else if (dataModal.type === 'list') {
    body = dataModal.item.title
    onClickModal = onDeleteList
  }

  return (
    <Modal
      className='modal-component'
      onHide={() => onShowModal(false)}
      show={showModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {dataModal.type === 'todo' ? `Delete ${dataModal.type}?` : null}
          {dataModal.type === 'list'
            ? `Delete ${dataModal.type} and all todos?`
            : null}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <ButtonComponent
          onClick={() => onClickModal(dataModal.item)}
          variant={'primary'}
          disabled={loading}
          title={'OK'}
        />
        <ButtonComponent
          onClick={() => onShowModal(false)}
          variant={'secondary'}
          disabled={loading}
          title={'Cancel'}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
