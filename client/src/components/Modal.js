import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

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
        <Button
          variant='primary'
          onClick={() => onClickModal(dataModal.item)}
          disabled={loading}
        >
          OK
        </Button>
        <Button
          variant='secondary'
          onClick={() => onShowModal(false)}
          disabled={loading}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
