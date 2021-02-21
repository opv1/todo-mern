import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'
import { ButtonComponent } from 'components/UI/index'

function ModalComponent() {
  const {
    showModal,
    dataModal,
    loading,
    onShowModal,
    onDeleteList,
    onDeleteTodo,
  } = useContext(AppContext)

  return (
    <Modal
      className='modal-component'
      onHide={() => onShowModal(false)}
      show={showModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {dataModal.type === 'todo'
            ? `Delete ${dataModal.type}?`
            : `Delete ${dataModal.type} and all todos?`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dataModal.type === 'todo' ? dataModal.item.text : dataModal.item.title}
      </Modal.Body>
      <Modal.Footer>
        <ButtonComponent
          onClick={
            dataModal.type === 'todo'
              ? () => onDeleteTodo(dataModal.item)
              : () => onDeleteList(dataModal.item)
          }
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
