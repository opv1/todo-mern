import React from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'
import { ButtonComponent } from 'components/UI/index'

const ModalComponent = () => {
  const { loading } = useSelector((state) => state.app)
  const { lists, selectedList } = useSelector((state) => state.list)
  const { modal, data } = useSelector((state) => state.modal)
  const { selectedTodos } = useSelector((state) => state.todo)
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
              ? () => onDeleteTodo({ selectedTodos }, data.item)
              : () => onDeleteList({ lists, selectedList }, data.item)
          }
          variant={'primary'}
          disabled={loading}
          title={'OK'}
        />
        <ButtonComponent
          onClick={onCloseModal}
          variant={'secondary'}
          disabled={loading}
          title={'Cancel'}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
