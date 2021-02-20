import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import logo from '../assets/Logo.svg'

const Footer = () => {
    return (
        
        <footer>

            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Nav>
                <Nav.Link href="https://flamingueo.typeform.com/to/aThP0rO5" target="_blank">Advertising</Nav.Link>
                <Nav.Link href="https://creators.substack.com/welcome" target="_blank" rel="noopener noreferrer">Newsletter</Nav.Link>
                </Nav>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end mr-2">
                <Navbar.Text>
                by <a href="https://twitter.com/jonastwt" target="_blank" rel="noopener noreferrer">Jonas</a>
                </Navbar.Text>
                </Navbar.Collapse>
                
            </Navbar>


            
        </footer>

    );
}
 
export default Footer;