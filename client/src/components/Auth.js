import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function AuthComponent() {
  const { loading, onSingup, onLogin } = useContext(AppContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Form className='auth-component'>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={onChange}
          value={form.email}
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
          onChange={onChange}
          value={form.password}
          type='password'
          name='password'
          placeholder='******'
        />
      </Form.Group>
      <Button
        onClick={() => onLogin(form)}
        variant='success mr-3'
        disabled={loading}
      >
        Login
      </Button>
      <Button
        onClick={() => onSingup(form)}
        variant='primary'
        disabled={loading}
      >
        Singup
      </Button>
    </Form>
  )
}

export default AuthComponent
