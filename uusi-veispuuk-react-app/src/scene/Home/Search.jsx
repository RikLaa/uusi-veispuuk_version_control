import React from 'react';
import firebase from 'firebase';
import $ from 'jquery';

import { Button } from 'react-bootstrap';

import Post from './Post.jsx';

var Search = React.createClass({
    getInitialState: function() {
        return {
            posts: [],
            imgPosts: [],
            loading: 0,
            amountToRetrieve: 0
        }
    },
    componentDidMount: function() {

    },
    // tätä funkiota kutsutaan aina kun searchWord päivittyy
    componentWillReceiveProps: function(nextProps) {
        this.searchContent(nextProps);
        
    },
    searchContent: function(nextProps) {
          //var amountToRetrieve = this.state.postNumbers;
        //amountToRetrieve += 12;
        console.log(amountToRetrieve);
        var amountToRetrieve = this.state.amountToRetrieve + 50;
        this.setState({
            loading: true
        });
        console.log(nextProps.searchWord);
        var searchWord = nextProps.searchWord;
        var searchTag = searchWord;
        

        
        console.log(searchTag);
        if (searchTag != '') {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                
                var postsTable = firebase.database().ref('posts/');
                var posts = [];
                var imgPostsTable = firebase.database().ref('imgPosts');
                var imgPosts = [];

                var getPosts = postsTable.orderByChild('tag').equalTo(searchTag).once('value', function(snapshot) {
                    posts = $.map(snapshot.val(), function(post, index) {
                        return [post];
                    });
                    console.log(posts);
                   
                    posts.reverse();
                    console.log(this.state.loading);
                    this.setState({
                        posts: posts,
                        loading: false,
                        amountToRetrieve: amountToRetrieve
                    });

                }.bind(this));

                var getImgPosts = imgPostsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                    imgPosts = $.map(snapshot.val(), function(imgPost, index) {
                        return [imgPost];
                    });
                    imgPosts.reverse();
                    
                    this.setState({
                        imgPosts: imgPosts
                        //loading: this.state.loading + 1
                    });

                }.bind(this));

               

            } else  {
                console.log("user not logged in");
            }
        }.bind(this));

        }
    },
    render: function() {

        if (this.state.loading == true) {
            return(
               <div className="fade-in">
                    <div className="loader center-block"></div>
                </div>   
            )
        }


        var posts = this.state.posts.map(function(post, index) {
            // haetaan sanan pituus jottain voidaan hakea myös kirjaimilla
            var length = this.props.searchWord.length;
            // ei hyväksytä tyhjää hakukenttää (jolloin haetaan kaikki)
            if (length > 0) {

                var key = post.postID;
                var name = 'nimi tähän';
                var users = [];
                var title = post.title;
                var content = post.content;
                var comments = post.comments;
                var date = post.date.slice(0, 11);
                var time = post.date.slice(16, 21);
                var tag = post.tag;
                // tehdään tagista yhtä lyhyt kuin hakusanasta jolloin voidaan suoraan verrata niitä
                var searchTag = post.tag.slice(0, length);

                if (this.props.searchWord === searchTag) {

                    return  <Post key={key} userName={name} users={this.state.users} title={title} content={content} comments={comments} date={date} time={time} tag={tag}/>
                } else {
                    return null
                }
            }
            
        }.bind(this));

        // return
        return (
             <div className="container">
               <div className="row fade-in">
                    {posts}               
               </div>

             { this.state.posts.length != 0 ?  (
                   <div className="row">
                    <p className="text-center addMargin">
                        <Button onClick={this.searchContent} className="text-center">Lataa lisää..</Button>
                    </p>
                </div>
             ) : ( null ) }
            </div>    
            
        );
    }
});

export default Search;