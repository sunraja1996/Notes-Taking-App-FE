import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../assests/logo.png"
import {useNavigate} from 'react-router-dom'

function Nav() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
      const storedFirstName = sessionStorage.getItem('firstName');
      setFirstName(storedFirstName || '');
    }, []);

    let logout = () => {
        sessionStorage.clear()
        navigate('/')
      }

  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        
      </Container>
    </Navbar>
    <Navbar className="bg-body-tertiary">
      <Container>
      <Navbar.Brand>
          <img
            alt="../assests/logo.png"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Brand>Take Notes</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {firstName}
          </Navbar.Text>
        </Navbar.Collapse>
        <Button className='ml-5 d-flex' variant="outline-danger" onClick={()=>logout()} >Logout</Button>
      </Container>
    </Navbar>
  </>
  )
}

export default Nav