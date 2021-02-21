import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { AppContext } from 'context/AppContext'

function NavbarComponent() {
  const { logout } = useContext(AppContext)

  return (
    <Navbar
      className='navbar-component'
      bg='primary'
      variant='dark mb-3'
      expand='lg'
    >
      <Navbar.Brand>Todo MERN</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink className='nav-link' to='/' exact>
            Dashboard
          </NavLink>
          <NavLink className='nav-link' to='/todos'>
            All todos
          </NavLink>
          <Nav.Link href='/' onClick={() => logout()}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
