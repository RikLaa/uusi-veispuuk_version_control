import React from 'react';
import axios from 'axios';

// Pääsivun sisältö. Navbar, container yms
import NavBar from './NavBar.jsx';


/* Ylimmällä divillä on 'container-fluid' luokka jotta navbar saadaan koko sivun mittaiseksi.
Container, sekä Profile näkymät tulevat tuohon this.props.children kohdalle. Ja niille pitää määrittää
ylimmäksi diviksi 'container' koska emme halua että ne ovat koko sivun leveydellä. Mutta ne tehdään Container
ja Profile komponenteissa valmiiksi jotta tähän ei tarvitsisi luoda enempää divejä */
var Home = React.createClass({
    getInitialState: function() {
        return {
            searchParams: {},
            newPost: null
        }
    },
    componentWillReceiveProps: function() {
        console.log("testi");
        
    },
    saveSearchInput: function(searchParams) {
        console.log(this.state.searchWord);
        this.setState({
            searchParams: searchParams
        });

    },
    addPost: function(post) {
        console.log(post);
        this.setState({
            newPost: post
        });
    },
    componentDidMount: function() {

    },
    render: function () {
        return (            
            <div className="container-fluid">
                    <NavBar searchInputToParent={this.saveSearchInput} addPostToParent={this.addPost}/>
                {/* this.props.children */}
                  {/*  searchWord annettaan myös propseina search.jsx sivulle */}
                  {this.props.children && React.cloneElement(this.props.children, { searchParams: this.state.searchParams, newPostToAdd: this.state.newPost })}
            </div>
        );
    }
});




export default Home;
