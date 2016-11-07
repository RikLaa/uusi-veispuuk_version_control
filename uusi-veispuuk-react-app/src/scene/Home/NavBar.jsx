import React from 'react';
import firebase from 'firebase';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import './NavBar.css';


var NavBar = React.createClass({
    handleSignOut: function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            }, function(error) {
            // An error happened.
        });
        console.log("signed out");  
    },
    handleSearch: function (e) {
        console.log(e);  
    },
    render: function () {
        return (
            <div className="row">
                <Navbar id="navBar" fluid>
                    <Nav pullLeft>
                        <NavDropdown noCaret eventKey={1} title={<span className="glyphicon glyphicon-menu-hamburger" />} id="nav-dropdown-1">
                        <MenuItem eventKey={1.1}>Aloita keskustelu</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2}>Lisää kuva</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>FAQ</MenuItem>
                    </NavDropdown>
                    <NavItem onClick={this.handleSearch} eventKey={2} href="#"><span className="glyphicon glyphicon-search" /></NavItem>
                        {/* <NavItem eventKey={2} href="#">Link</NavItem> */}
                    </Nav>
                        
                        <Nav pullRight>
                        <NavDropdown noCaret eventKey={3} title={<span className="glyphicon glyphicon-user" />} id="nav-dropdown-2">
                        <MenuItem eventKey={3.1} href="#/home/profile">Profiili</MenuItem>
                            <MenuItem divider />
                        <MenuItem eventKey={3.2} onClick={this.handleSignOut} href="/">Kirjaudu ulos</MenuItem>

                        
                    </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

export default NavBar;