import React from 'react'
import { Form } from 'react-bootstrap'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useInput } from 'hooks/useInput'
import { useActions } from 'hooks/useActions'
import { ButtonComponent } from 'components/UI/index'

const AuthComponent: React.FC = () => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const { loading } = useTypeSelector((state) => state.app)
  const { onLoginUser, onSingupUser } = useActions()

  return (
    <Form className='auth-component'>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...emailInput}
          type='email'
          name='email'
          placeholder='example@mail.com'
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...passwordInput}
          type='password'
          name='password'
          placeholder='******'
        />
      </Form.Group>
      <ButtonComponent
        className='mr-3'
        onClick={() =>
          onLoginUser({
            email: emailInput.value,
            password: passwordInput.value,
          })
        }
        variant='success'
        disabled={loading}
        title='Login'
      />
      <ButtonComponent
        onClick={() =>
          onSingupUser({
            email: emailInput.value,
            password: passwordInput.value,
          })
        }
        variant='primary'
        disabled={loading}
        title='Singup'
      />
    </Form>
  )
}

export default AuthComponent
