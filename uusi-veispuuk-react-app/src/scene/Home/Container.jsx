import React from 'react';
import firebase from 'firebase';

import Post from './Post.jsx';

import { Modal } from 'react-bootstrap';



var Container = React.createClass({
    getInitialState: function () {
        // loading tila näyttää onko postaukset ladattu vai ei
        return {
            loading: true,
            users: [],
            posts: []
        }
    },
    componentDidMount: function () {
        /* tehdään jos käyttäjä on kirjautunut sisään. Koska kaikki on asynconista joudutaan aina suorittamaan
        yksi asia kerrallaan. ESIM jos yritetään hakea postaukset tietokannasta heti login sivulta tultaessa,
        se ei onnistu koska käyttäjän kirjautumista ei ole vielä varmistettu. Alla oleva funktio varmistaa että
        käyttäjä on varmasti kirjautunut sisään ennen kuin muita toimenpiteitä tehdään*/
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user signed in");
                // haetaan postaukset tietokannasta
                firebase.database().ref('posts').on('value', function (snapshot) {
                    var posts = snapshot.val()
                    /* tallennetaan taulukko this.state.posts -tilaan,
                    ja vaihdetaan loading: false. Jolloin tiedetään että kaikki on ladattu. */
                    this.setState({
                        posts: posts,
                        loading: false
                    });
                }.bind(this));  
            } else {
                console.log("user NOT signed in");
            }
            }.bind(this));  
    },
    render: function () {
        // jos postauksia ei ole vielä haettu, niin näytetään latausruutu
        if (this.state.loading) {
            return (
                <p>Loading.... tähän joku hieno animaatio</p>
            );    
        };
        // käydään läpi kaikki postaukset this.state.posts -taulukosta
        var posts = this.state.posts.map(function (post) {
            console.log(post);
            var key = post.postId;
            var title = post.title;
            var content = post.content;
            var comments = post.comments;
            console.log(title);
           
            /* renderoidaan jokainen postauskomponentti Post-komponentin avulla. 
            Sille annettaan tarvittavat tiedot propseina jotta niihin päästään käsiksi myöhemmin*/
            return (
                <Post key={key} title={title} content={content} comments={comments}/>
            );   
        })
        // tässä renderoidaan viimeiseksi koko Container 
        return (
            <div className="container">
               <div className="row">
                    {posts}               
               </div>
            </div>    
        );
    }
})


export default Container;