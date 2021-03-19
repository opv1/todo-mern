import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { useActions } from 'hooks/useActions'

const NavbarComponent: React.FC = () => {
  const { onLogoutUser } = useActions()

  return (
    <Navbar
      className='navbar-component mb-3'
      bg='primary'
      variant='dark'
      expand='lg'
    >
      <Navbar.Brand as={Link} to='/'>
        Todo MERN
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink className='nav-link' to='/' exact>
            Dashboard
          </NavLink>
          <NavLink className='nav-link' to='/todos'>
            All todos
          </NavLink>
          <Nav.Link href='/' onClick={onLogoutUser}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
