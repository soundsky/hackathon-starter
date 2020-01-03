import React from 'react';
import { Navbar, Nav, Form, FormControl, FormGroup, Button } from 'react-bootstrap';
// import { NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import NavbarToggler from 'reactstrap/lib/NavbarToggler';


export default function NavbarHeader() {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Soundsky</Navbar.Brand>
                <FormGroup>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </FormGroup>{' '}

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/tracks">Tracks</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </FormGroup>{' '}
                    <FormGroup>
                        <Button variant="outline-success">Search</Button>
                    </FormGroup>{' '}
                </Form>
            </Navbar>
        </div>
    )
}

