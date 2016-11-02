import React, { Component } from 'react';

// Pääsivun sisältö. Navbar, container yms
import NavBar from './NavBar.jsx';
import Container from './Container';


var Home = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
               
                <div className="row">
                    <NavBar />
                    <Container />
                </div>
                  { this.props.children }
            </div>
        );
    }
});




export default Home;