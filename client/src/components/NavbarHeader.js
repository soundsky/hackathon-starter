import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';


export default function NavbarHeader() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Soundsky</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}