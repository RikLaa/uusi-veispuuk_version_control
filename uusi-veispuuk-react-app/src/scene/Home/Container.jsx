import React from 'react';
import firebase from 'firebase';
import $ from 'jquery';
import Post from './Post.jsx';

import { Button ,Modal } from 'react-bootstrap';



var Container = React.createClass({
    getInitialState: function () {
        // loading tila näyttää onko postaukset ladattu vai ei
        return {
            loading: true,
            users: [],
            posts: [],
            imgPosts: [],
            postNumbers: 0
        }
    },
    componentDidMount: function () {
      this.getJSON();
    },
    getJSON: function() {
          /* tehdään jos käyttäjä on kirjautunut sisään. Koska kaikki on asynconista joudutaan aina suorittamaan
        yksi asia kerrallaan. ESIM jos yritetään hakea postaukset tietokannasta heti login sivulta tultaessa,
        se ei onnistu koska käyttäjän kirjautumista ei ole vielä varmistettu. Alla oleva funktio varmistaa että
        käyttäjä on varmasti kirjautunut sisään ennen kuin muita toimenpiteitä tehdään*/
           firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user signed in");

                var postsTable = firebase.database().ref('posts');
                var imgPostsTable = firebase.database().ref('imgPosts');

                var amountToRetrieve = this.state.postNumbers;
                amountToRetrieve += 12;
                console.log(amountToRetrieve);

                var imgPosts = [];
                var recentImgPostsRef = imgPostsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                    imgPosts = $.map(snapshot.val(), function(imgPost, index) {
                        return [imgPost];
                    });
                    imgPosts.reverse();
                    console.log(imgPosts);
                });

                var posts = [];
                var recentPostsRef = postsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                   
                     posts = $.map(snapshot.val(), function(post, index) {
                         return [post];
                     });
                     posts.reverse();
                    console.log(posts);
                    /* tallennetaan taulukko this.state.posts -tilaan,
                    ja vaihdetaan loading: false. Jolloin tiedetään että kaikki on ladattu. */
                    this.setState({
                        posts: posts,
                        imgPosts: imgPosts,
                        loading: false,
                        postNumbers: amountToRetrieve
                    });
                    
                }.bind(this));  
               
                // haetaan postaukset tietokannasta
                //firebase.database().ref('posts').on('value', function (snapshot) {
                  //  var posts = snapshot.val();
                    /* tallennetaan taulukko this.state.posts -tilaan,
                    ja vaihdetaan loading: false. Jolloin tiedetään että kaikki on ladattu. */
                    //this.setState({
                      //  posts: posts,
                        //loading: false
                   // });
                //}.bind(this));  
            } else {
                console.log("user NOT signed in");
            }
            }.bind(this));  
    },
    render: function () {
        // jos postauksia ei ole vielä haettu, niin näytetään latausruutu
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-md-offset-5 vertical-align">
                            <div className="loader"></div>
                        </div>
                    </div>
               </div>
            );    
        };


        // käydään läpi kaikki postaukset this.state.posts -taulukosta
        var posts = this.state.posts.map(function (post) {
            //console.log(post);
            var key = post.postID;
            var title = post.title;
            var content = post.content;
            var comments = post.comments;
          
           
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

               <div className="row">
                    <p className="text-center addMargin">
                        <Button onClick={this.getJSON} className="text-center">Lataa lisää..</Button>
                    </p>
               </div>
            </div>    
        );
    }
})


export default Container;