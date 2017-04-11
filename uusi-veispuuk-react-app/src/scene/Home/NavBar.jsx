import React from 'react';

import AddPostModal from './NavBarModals/AddPostModal.jsx';
import AddPictureModal from './NavBarModals/AddPictureModal.jsx';

import { Button, Nav, Navbar, NavDropdown, NavItem, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
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
            searchInput: '',
            newPostsToRender: []
        }
    },
   componentDidUpdate: function() {
       //console.log(this.state.searchInput);
        //this.props.getSearchInput(searchWord);
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

    },
    // määritellään search boxin näkyvyys
    showSearch: function (e) { 
        
        console.log(location.hash);
        if (this.state.showSearch === false) {
            this.setState({
                showSearch: true
            })  
            //console.log(this.state.search); 
        } else {
            // we need to container.jsx to stop searching if searchpanel is closed
            this.props.searchInputToParent({ searchWord: '', searchType: 'NONE' });     
            this.setState({
                showSearch: false
            });
           //this.props.getSearchInput('');
        }
    },

    //  Haetaan input kentästä kirjaimet jotta voidaan etsiä postauksia search-sivulla
    getSearchInput: function(e) {
        var searchWord = document.getElementById('searchInput').value;
        var searchType = document.getElementById('searchType').value;
        //console.log(searchWord);
        //console.log(searchType);
        //this.props.searchInputToParent(searchWord); // viedään hakusana isä-komponentille
        this.props.searchInputToParent({ searchWord: searchWord, searchType: searchType });
    },
     addPostToParent: function(post) {
       // lähetetään uudet postaukset isälle
       this.props.addPostToParent(post);
       console.log(post);
    },
    render: function () {

        return (
            <div className="row">
                <Navbar id="navBar" className="grey" fluid>
                    <Nav pullLeft>
                        <NavDropdown noCaret eventKey={1} title={<span className="glyphicon glyphicon-menu-hamburger navbar-icon" />} id="nav-dropdown-1">
                        <MenuItem eventKey={1.1} href="#" onClick={this.showModal.bind(this, "post")}>Aloita keskustelu</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2} href="#" onClick={this.showModal.bind(this, "picture")}>Lisää kuva</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3} href="/home/FAQ">FAQ</MenuItem>
                    </NavDropdown>
                    <NavItem onClick={this.showSearch} eventKey={2}><span className="glyphicon glyphicon-search navbar-icon" /></NavItem>
                        {/* <NavItem eventKey={2} href="#">Link</NavItem> */}    
                    </Nav>
                           
                    {this.state.showSearch ? (
                        <Navbar.Form pullLeft>
                            <FormGroup onChange={this.getSearchInput}>
                                <FormControl id="searchInput" type="text" placeholder="#Mitähaluatetsiä" />
                            </FormGroup>

                            <FormGroup>
                                <FormControl id="searchType" componentClass="select" placeholder="select">
                                    <option value="kaikki">Kaikki</option> 

                                    {/* 
                                    MUUTETAAN NAMA JOS KERETAAN
                                    <option value="keskustelu">Keskustelu</option>
                                    <option value="kuva">Kuva</option>

                                    */}
                                    
                                </FormControl>
                            </FormGroup>

                            {/* <Button onClick={this.getSearchInput} type="submit">Etsi</Button> */}
                            
                        </Navbar.Form>
                    ) : null }
                        
                        {/*<Nav className="col-sm-10" id="navbar_logo">
                            <NavItem href="#/home/" className="" id="">Etusivulle</NavItem>
                        </Nav>*/}

                        <Nav pullRight>
                        <NavDropdown noCaret eventKey={3} title={<span className="glyphicon glyphicon-user navbar-icon" />} id="nav-dropdown-2">
                        <MenuItem eventKey={3.1} href="/home/profile">Profiili</MenuItem>
                            <MenuItem divider />
                        <MenuItem eventKey={3.2} onClick={this.handleSignOut} href="/">Kirjaudu ulos</MenuItem>

                        
                    </NavDropdown>
                        </Nav>
                    
                </Navbar>

                <AddPictureModal showModal={this.state.showModal.picture} onClick={this.close} />
                <AddPostModal newPostsToRender={this.newPostsToRender} addPostToParent={this.addPostToParent} showModal={this.state.showModal.post} onClick={this.close} />
            </div>
        );
    }
});

export default NavBar;
