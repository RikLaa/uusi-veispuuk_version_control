import React from 'react';
import firebase from 'firebase';
import $ from 'jquery';

var Search = React.createClass({
    getInitialState: function() {
        return {
            posts: [],
            imgPosts: [],
            loading: 0,
            postNumbers: 0
        }
    },
    componentDidMount: function() {
        this.searchContent()
    },
    searchContent: function() {
          var amountToRetrieve = this.state.postNumbers;
        amountToRetrieve += 12;
        console.log(amountToRetrieve);

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                
                var postsTable = firebase.database().ref('posts');
                var posts = [];
                var imgPostsTable = firebase.database().ref('imgPosts');
                var imgPosts = [];

                var getPosts = postsTable.orderByKey().startAt('0').limitToLast(amountToRetrieve).once('value', function(snapshot) {
                    posts = $.map(snapshot.val(), function(post, index) {
                        return [post];
                    });
                    posts.reverse();

                    this.setState({
                        posts: posts
                    });

                }.bind(this));

               

            } else  {
                console.log("user not logged in");
            }
        }.bind(this));
    },
    render: function() {

        if (this.state.loading !== 0) {
            return(
                <p>loading</p>
            )
        }

        var post = this.state.posts.map(function(post, index) {
            console.log(post.tag);
            if (this.props.searchWord === post.tag) {
                return <p >{post.tag}</p>
            } else {
                return null
            }
        }.bind(this));

        // return
        return (
            <div>
                <p>Löytyyköhän tuolla mitään..</p>
                <p>{post}</p>
            </div>
            
        );
    }
});

export default Search;