import React from 'react';

// Pääsivun sisältö. Navbar, container yms
import NavBar from './NavBar.jsx';


/* Ylimmällä divillä on 'container-fluid' luokka jotta navbar saadaan koko sivun mittaiseksi.
Container, sekä Profile näkymät tulevat tuohon this.props.children kohdalle. Ja niille pitää määrittää
ylimmäksi diviksi 'container' koska emme halua että ne ovat koko sivun leveydellä. Mutta ne tehdään Container
ja Profile komponenteissa valmiiksi jotta tähän ei tarvitsisi luoda enempää divejä */
var Home = React.createClass({
    getInitialState: function() {
        return {
            searchWord: '',
            newPost: null
        }
    },
    componentWillReceiveProps: function() {
        console.log("testi");
        
    },
    saveSearchInput: function(searchWord) {
        this.setState({
            searchWord: searchWord
        });

    },
    addPost: function(post) {
        console.log(post);
        this.setState({
            newPost: post
        });
    },
    render: function () {
        return (            
            <div className="container-fluid">
                    <NavBar searchInputToParent={this.saveSearchInput} addPostToParent={this.addPost}/>
                {/* this.props.children */}
                  {/*  searchWord annettaan myös propseina search.jsx sivulle */}
                  {this.props.children && React.cloneElement(this.props.children, { searchWord: this.state.searchWord, newPostToAdd: this.state.newPost })}
            </div>
        );
    }
});




export default Home;