import React from 'react';

// Pääsivun sisältö. Navbar, container yms
import NavBar from './NavBar.jsx';


/* Ylimmällä divillä on 'container-fluid' luokka jotta navbar saadaan koko sivun mittaiseksi.
Container, sekä Profile näkymät tulevat tuohon this.props.children kohdalle. Ja niille pitää määrittää
ylimmäksi diviksi 'container' koska emme halua että ne ovat koko sivun leveydellä. Mutta ne tehdään Container
ja Profile komponenteissa valmiiksi jotta tähän ei tarvitsisi luoda enempää divejä */
var WORD;

var Home = React.createClass({
    getInitialState: function() {
        return {
            searchWord: ''
        }
    },
    saveSearchInput: function(searchWord) {
        this.setState({
            searchWord: searchWord
        });

        WORD = searchWord;
    },
    render: function () {

        return (            
            <div className="container-fluid background-color">
                    <NavBar getSearchInput={this.saveSearchInput}/>
                {/* this.props.children */}
                  {/*  searchWord annettaan myös propseina search.jsx sivulle */}
                  {React.cloneElement(this.props.children, { searchWord: WORD })}
            </div>
        );
    }
});




export default Home;