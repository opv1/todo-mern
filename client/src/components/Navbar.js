import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { AppContext } from '../context/AppContext'

function NavbarComponent() {
  const { logout } = useContext(AppContext)

  return (
    <Navbar
      className='navigation-component mb-3'
      bg='primary'
      variant='dark'
      expand='lg'
    >
      <Navbar.Brand>Todo MERN</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent