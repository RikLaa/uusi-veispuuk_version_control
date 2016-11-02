import React from 'react';

// Pääsivun sisältö. Navbar, container yms
import NavBar from './NavBar.jsx';
import Container from './Container';


var Home = React.createClass({
    render: function () {
        return (
            <div className="row">
                <NavBar />
                <Container />
            </div>
        );
    }
});




export default Home;