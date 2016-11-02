import React from 'react';
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
                    <NavDropdown eventKey={3} title="Dropdown" id="nav-dropdown-2">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

export default NavBar;