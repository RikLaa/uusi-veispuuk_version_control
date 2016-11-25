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
            newPost: {
                postID: 321,
                userID: 10,
                title: 'fix',
                content: 'your software has many errors plz fix. this sucks',
                comments: [],
                date: 'Sun Aug 19 2007 17:04:32 GMT+0300 (EEST)',
                tag: '#koira'    
            }
        }
    },
    saveSearchInput: function(searchWord) {
        console.log('isä ' + searchWord);
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
                    <NavBar getSearchInput={this.saveSearchInput} addPost={this.addPost}/>
                {/* this.props.children */}
                  {/*  searchWord annettaan myös propseina search.jsx sivulle */}
                  {this.props.children && React.cloneElement(this.props.children, { searchWord: this.state.searchWord, newPostToAdd: this.state.newPost })}
            </div>
        );
    }
});




export default Home;