import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './NavBar.css';


var NavBar = React.createClass({
    render: function () {
        return (
            <Navbar fluid>
                <Nav>
                   
                    <NavDropdown span="" eventKey={1} noCaret title={<span className="glyphicon glyphicon-menu-hamburger"></span>} id="nav-dropdown-1">
                        <MenuItem eventKey={1.1}>Action</MenuItem>
                        <MenuItem eventKey={1.2}>Another action</MenuItem>
                        <MenuItem eventKey={1.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Separated link</MenuItem>
                    </NavDropdown>

                        {/* <a href="#">React-Bootstrap</a>*/}
                   
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={2} title="Dropdown" id="nav-dropdown-2">
                        <MenuItem eventKey={2.1} href="/profile">Oma profiili</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.2} href="/">Kirjaudu ulos</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

export default NavBar;