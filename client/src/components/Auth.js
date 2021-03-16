import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { useInput } from 'hooks/useInput'
import { useActions } from 'hooks/useActions'
import { ButtonComponent } from 'components/UI/index'

const AuthComponent = () => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const { loading } = useSelector((state) => state.app)
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
        onClick={() =>
          onLoginUser({
            email: emailInput.value,
            password: passwordInput.value,
          })
        }
        variant={'success mr-3'}
        disabled={loading}
        title={'Login'}
      />
      <ButtonComponent
        onClick={() =>
          onSingupUser({
            email: emailInput.value,
            password: passwordInput.value,
          })
        }
        variant={'primary'}
        disabled={loading}
        title={'Singup'}
      />
    </Form>
  )
}

export default AuthComponent
