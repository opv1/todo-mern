import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function Navigation() {
  const { logout } = useContext(AppContext)

  return (
    <div className='navigation-component mb-3'>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand>Todo MERN</Navbar.Brand>
        <Nav className='mr-auto'>
          <NavLink to='/dashboard' className='nav-link'>
            Dashboard
          </NavLink>
          <NavLink to='/todos' className='nav-link'>
            All todos
          </NavLink>
          <NavLink exact to='/' className='nav-link' onClick={() => logout()}>
            Logout
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation
