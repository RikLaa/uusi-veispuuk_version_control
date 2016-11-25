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
            searchWord: ''
        }
    },
    componentWillReceiveProps: function() {
        console.log("testi");
        
    },
    saveSearchInput: function(searchWord) {
        console.log('isä ' + searchWord);
        this.setState({
            searchWord: searchWord
        });

    },
    render: function () {
        console.log("testi " + this.state.searchWord);

    },
    render: function () {

        return (            
            <div className="container-fluid">
                    <NavBar getSearchInput={this.saveSearchInput}/>
                {/* this.props.children */}
                    <a className="link" href="#/home"> <h1 className="heading_text">Veispuuk</h1> </a>
                  {/*  searchWord annettaan myös propseina search.jsx sivulle */}

                  {this.props.children && React.cloneElement(this.props.children, { searchWord: this.state.searchWord })}

            </div>
        );
    }
});




export default Home;