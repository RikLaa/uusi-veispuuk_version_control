import React from 'react';
import Post from './Post.jsx';
import axios from 'axios';
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
        axios.get('/api/posts')
            .then( (response) => {
                //console.log(response);
                this.setState({
                    posts: response.data,
                    loading: 1
                })
        
        } )

    },
    render: function () {


        // jos kaikkia ajax käskyjä ei ole vielä haettu (yhteensä 3), niin näytetään latausruutu
        if (this.state.loading < 1) { 
            return (
                <div className="fade-in">
                    <div className="loader center-block"></div>
                </div>    
                
            ); 
          
        };

       console.log(this.state.posts); 

        // käydään läpi kaikki postaukset this.state.posts -taulukosta
        var posts = this.state.posts.map(function (post) {
            var userID = post.userID;
            

            var key = post.postID;
            var title = post.title;
            var content = post.content;
            var comments = post.comments;
            var date = post.created_at.slice(0, 11);
            var time = post.created_at.slice(10, 21);
            var tag = post.tag;
            var image = post.pictureURL;
            console.log(post);
            /* renderoidaan jokainen postauskomponentti Post-komponentin avulla. 
            Sille annettaan tarvittavat tiedot propseina jotta niihin päästään käsiksi myöhemmin*/
            return (
                <Post  postID={key} key={key} userName={name} users={this.state.users} title={title} content={content} comments={comments} date={date} time={time} tag={tag} image={image}/>
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
