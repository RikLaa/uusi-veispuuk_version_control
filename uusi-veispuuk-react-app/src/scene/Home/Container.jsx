import React from 'react';
import Post from './Post.jsx';

import { Button } from 'react-bootstrap';



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
    componentWillReceiveProps: function(nextProps) {
        var newPost = nextProps.newPostToAdd; // uusi postaus
        var oldPosts = this.state.posts; // vanhat postaukset
        oldPosts.unshift(newPost); // uusi postaus taulukon kärkeen
        this.setState({
            posts: oldPosts
        });

    },
    getJSON: function() {

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
            <h2 className="container_heading">Uusimmat</h2>
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