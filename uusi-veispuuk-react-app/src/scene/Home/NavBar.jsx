import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import './NavBar.css';


var NavBar = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Navbar fluid>
                    <Nav pullLeft>
                        <NavDropdown noCaret eventKey={1} title={<span className="glyphicon glyphicon-menu-hamburger" />} id="nav-dropdown-1">
                        <MenuItem eventKey={1.1}>Aloita keskustelu</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2}>Lisää kuva</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>FAQ</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={1} href="#"><span className="glyphicon glyphicon-search" /></NavItem>
                        {/* <NavItem eventKey={2} href="#">Link</NavItem> */}
                    </Nav>
                        
                        <Nav pullRight>
                        <NavDropdown noCaret eventKey={2} title={<span className="glyphicon glyphicon-user" />} id="nav-dropdown-2">
                        <MenuItem eventKey={2.1} href="/home/profile">Profiili</MenuItem>
                            <MenuItem divider />
                        <MenuItem eventKey={2.2} href="/">Kirjaudu ulos</MenuItem>

                        
                    </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

export default NavBar;