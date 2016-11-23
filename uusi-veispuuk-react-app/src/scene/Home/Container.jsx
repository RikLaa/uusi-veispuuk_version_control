import React from 'react';
import firebase from 'firebase';
import $ from 'jquery';
import Post from './Post.jsx';

import { Button ,Modal } from 'react-bootstrap';



var Container = React.createClass({
    getInitialState: function () {
        // loading tila näyttää onko postaukset ladattu vai ei
        return {
            loading: 0,
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

                var usersTable = firebase.database().ref('users');
                var imgPostsTable = firebase.database().ref('imgPosts');
                var postsTable = firebase.database().ref('posts');

                var amountToRetrieve = this.state.postNumbers;
                amountToRetrieve += 12;
                console.log(amountToRetrieve);

                // hae käyttäjät
                var users = [];
                var usersRef = usersTable.once('value', function(snapshot) {
                    users = $.map(snapshot.val(), function(user, index) {
                        return [user];
                    });
                    console.log("käyttäjät");
                    // tallennetaan käyttäjät containerin this.state.users tilaan. Lisätään loading tilaa yhdellä
                    this.setState({
                        users: users,
                        loading: this.state.loading + 1
                    });
                    //console.log(users);
                }.bind(this));

                // hae kuvapostaukset
                var imgPosts = [];
                var recentImgPostsRef = imgPostsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                    imgPosts = $.map(snapshot.val(), function(imgPost, index) {
                        return [imgPost];
                    });
                    imgPosts.reverse();
                    console.log("kuvat");
                    //console.log(imgPosts);
                    this.setState( {
                        imgPosts: imgPosts,
                        loading: this.state.loading + 1,
                    });

                }.bind(this));

                // hae tekstipostaukset
                var posts = [];
                var recentPostsRef = postsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                   
                    //console.log(snapshot.val());
                    posts = $.map(snapshot.val(), function(post, index) {
                        if (post !== undefined) {
                         return [post];
                        } 
                    });
                    posts.reverse();
                     console.log(posts);
                    console.log("postaukset");
                    //console.log(posts);
                    /* tallennetaan taulukko this.state.posts -tilaan,
                    ja vaihdetaan loading: false. Jolloin tiedetään että kaikki on ladattu. */
                    this.setState({
                        posts: posts,
                        loading: this.state.loading + 1,
                        postNumbers: amountToRetrieve
                    });
                    
                }.bind(this));  
            
            } else {
                console.log("user NOT signed in");
            }
            }.bind(this));  
    },
    render: function () {
        // jos kaikkia ajax käskyjä ei ole vielä haettu (yhteensä 3), niin näytetään latausruutu
        if (this.state.loading < 3) { 
            return (
                <div className="fade-in">
                    <div className="loader center-block"></div>
                </div>    
                
            ); 
          
        };

        
        // käydään läpi kaikki postaukset this.state.posts -taulukosta
        var posts = this.state.posts.map(function (post) {
            //console.log(post);
            var userID = post.userID;
            
            // etsitään userID:llä käyttäjälle etu- ja sukunimi.
            var name = this.state.users.map(function(user) {
                if (userID === user.userID) {
                    var userString = user.firstName + " " + user.lastName;
                    return userString;
                } else {
                    return "";
                }
            });

            var key = post.postID;
            var title = post.title;
            var content = post.content;
            var comments = post.comments;
            var date = post.date.slice(0, 11);
            var time = post.date.slice(16, 21);
            var tag = post.tag;
            //console.log(post);
            /* renderoidaan jokainen postauskomponentti Post-komponentin avulla. 
            Sille annettaan tarvittavat tiedot propseina jotta niihin päästään käsiksi myöhemmin*/
            return (
                <Post key={key} userName={name} users={this.state.users} title={title} content={content} comments={comments} date={date} time={time} tag={tag}/>
            );   
        }.bind(this));

        
        // tässä renderoidaan viimeiseksi koko Container 
        return (
            <div className="container">
            <h1 className="container_heading">Uusimmat</h1>
               <div className="row fade-in">
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