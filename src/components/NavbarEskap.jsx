import React from 'react'
import {Link} from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavbarEskap() {

  const { currentUser, logout } = useAuth();

  return (
    <Navbar bg="primary">
    <Navbar.Brand>
      <img
        src="eskap_logo.png"
        width="50"
        className="d-inline-block align-top"
        alt="Eskap Logo"
      />
    </Navbar.Brand>

    { currentUser ? 
    ( 
      <>
        <Nav className="mr-auto">
          <Link to="/"><Button>Home</Button></Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Button onClick={logout}>Logout</Button>
        </Navbar.Collapse>
      </>
    ):
    (
      <Nav className="mr-auto">
        <Link to="/login"><Button>Login</Button></Link>
      </Nav>
    )
  }
  </Navbar>
  )
}

export default NavbarEskap;