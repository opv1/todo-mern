import React from 'react'
import { Modal } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { ButtonComponent } from 'components/UI/index'

const ModalComponent: React.FC = () => {
  const { loading } = useTypeSelector((state) => state.app)
  const { modal, data } = useTypeSelector((state) => state.modal)
  const { onCloseModal, onDeleteList, onDeleteTodo } = useActions()

  return (
    <Modal className='modal-component' onHide={onCloseModal} show={modal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {modal && data.type === 'todo'
            ? `Delete ${data.type}?`
            : `Delete ${data.type} and all todos?`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modal && data.type === 'todo' ? data.item.text : data.item.title}
      </Modal.Body>
      <Modal.Footer>
        <ButtonComponent
          onClick={
            data.type === 'todo'
              ? () => onDeleteTodo(data.item._id)
              : () => onDeleteList(data.item._id)
          }
          variant='primary'
          disabled={loading}
          title='OK'
        />
        <ButtonComponent
          onClick={onCloseModal}
          variant='secondary'
          disabled={loading}
          title='Cancel'
        />
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
