import React from 'react';
import firebase from 'firebase';
import $ from 'jquery';

import AddPostModal from './NavBarModals/AddPostModal.jsx';
import AddPictureModal from './NavBarModals/AddPictureModal.jsx';

import { Nav, Navbar, NavDropdown, NavItem, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import './NavBar.css';


var NavBar = React.createClass({
    getInitialState: function() {
        // modaalien näkyvyys alussa false
        return {
            showModal: {
                picture: false ,
                post: false 
            },
            showSearch: false,
            searchInput: ''
        }
    },
    showModal: function(type) {
        // määritetään näkyvyys jommalle kummalle modaalille
        if (type === "picture") {
             this.setState({
                showModal: {
                picture: true
                }
            });
        } else if (type === "post") {
            this.setState({
                showModal: {
                post: true
                }
            });
        }
       
    },
    // suljetaan modaalit
    close: function() {
        // suljetaan modaali
        this.setState({
             showModal: {
                picture: false ,
                post: false 
            }
        });
    },
    handleSignOut: function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            }, function(error) {
            // An error happened.
        });
        console.log("signed out");  
    },
    // määritellään search boxin näkyvyys
    showSearch: function (e) { 
        if (this.state.showSearch === false) {
            this.setState({
                showSearch: true
            })  
            //console.log(this.state.search); 
        } else {
            this.setState({
                showSearch: false
            });
        }
    },
    getSearchInput: function(e) {
        var searchWord = e.target.value;
        this.setState({
            searchInput: searchWord
        });
        // viedään hakusana isä-komponentille
        this.props.getSearchInput(searchWord);
    },
    render: function () {
        return (
            <div className="row">
                <Navbar id="navBar" fluid>
                    <Nav pullLeft>
                        <NavDropdown noCaret eventKey={1} title={<span className="glyphicon glyphicon-menu-hamburger" />} id="nav-dropdown-1">
                        <MenuItem eventKey={1.1} onClick={this.showModal.bind(this, "post")}>Aloita keskustelu</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2} onClick={this.showModal.bind(this, "picture")}>Lisää kuva</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3} href="#/home/FAQ">FAQ</MenuItem>
                    </NavDropdown>
                    <NavItem onClick={this.showSearch} eventKey={2} href={ this.state.showSearch ? ("#/home/search") : ("#/home/")}><span className="glyphicon glyphicon-search" /></NavItem>
                        {/* <NavItem eventKey={2} href="#">Link</NavItem> */}

                    <NavItem>
                    { this.state.showSearch ? (
                         <div id="searchIcon" ref="searchIcon" className="fade-in">
                            <form>
                                <FormGroup bsSize="sm">
                                    <FormControl 
                                    type="text"
                                    value={this.state.value}
                                    placeholder="#mitähalutetsiä"
                                    onChange={this.getSearchInput} />
                                    
                                </FormGroup>
                            </form>
                        </div>
                        
                    ) : null }
                   
                        
                    </NavItem>
                    </Nav>
                        
                        <Nav pullRight>
                        <NavDropdown noCaret eventKey={3} title={<span className="glyphicon glyphicon-user" />} id="nav-dropdown-2">
                        <MenuItem eventKey={3.1} href="#/home/profile">Profiili</MenuItem>
                            <MenuItem divider />
                        <MenuItem eventKey={3.2} onClick={this.handleSignOut} href="/">Kirjaudu ulos</MenuItem>

                        
                    </NavDropdown>
                    </Nav>
                </Navbar>

                <AddPictureModal showModal={this.state.showModal.picture} onClick={this.close} />
                <AddPostModal showModal={this.state.showModal.post} onClick={this.close} />
            </div>
        );
    }
});

export default NavBar;