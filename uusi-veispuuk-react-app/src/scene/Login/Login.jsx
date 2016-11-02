import React from 'react';

import './Login.css';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


var Login = React.createClass({
    render: function () {
        return (
            <div className="container">
            <div className="row vertical-center">asdf
                
                    <LoginBox />
                
            </div>
                </div>
        );
    }
});

var LoginBox = React.createClass({
    render: function () {
        return (
            <div className="col-md-4 col-md-offset-4 login-box border">
                <span>Example</span>
                <form className="col-md-offset-1">
                    <div className="form-group">
                        <label>Etunimi</label>
                        <input id="exampleInputEmail1" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Sukunimi</label>
                        <input className="form-control" id="sukunimi-input"></input>
                    </div>

                    <div className="form-group">
                        <label>Sähköposti</label>
                    </div>
        
                </form>
            </div>
        );
    }
});

var Testi = React.createClass({
    render: function () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
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

//module.exports = Testi;
export default Login;
