import axios from 'axios';
import React from 'react';
import './Profile.css';
import $ from 'jquery';
import { Button ,Modal } from 'react-bootstrap';
//import Container from '../Home/Container.jsx'
//import data from './Userdata.json'
//import userName from './Profilename.jsx'
//import posts from './Profileposts.jsx'
//import comments from '../Home/Comment.jsx'
//import {Form, FormControl, FormGroup} from 'react-bootstrap';
/*import Profileposts from './Profileposts.jsx'*/
import Post from './Profileposts.jsx'
/*import Comment from '../Home/Comment.jsx'*/
/*import Profilename from './Profilename.jsx'*/
import './Profile.css'

var Profile = React.createClass({
    
      getInitialState: function () {
        // loading tila näyttää onko postaukset ladattu vai ei
        return { 
            loading: 0,
            user: {},
            posts: [],
            imgPosts: [],
            postNumbers: 0
        }
    },
    componentDidMount: function () {
      this.getJSON();
    this.getProfileInfo();
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
        axios.get('/api/user')
            .then( (response) => {
                //console.log(response);
                this.setState({
                    posts: response.data,
                    loading: 1
                })
        
        } )

    },
    
        getProfileInfo: function() {
        axios.get('/api/user/show')
            .then( (response) => {
                console.log(response.data[0]);
                this.setState({
                    user: response.data[0],
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

    //   console.log(this.state.posts); 
       // console.log(this.state.user);
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
            var type = post.postType;
          console.log(type);
            /* renderoidaan jokainen postauskomponentti Post-komponentin avulla. 
            Sille annettaan tarvittavat tiedot propseina jotta niihin päästään käsiksi myöhemmin*/
            return (
                <Post  postID={key} key={key} userName={name} title={title} content={content} comments={comments} date={date} time={time} tag={tag} image={image} postType={type}/>
            );   
        }.bind(this));
        
        
        //renderöidään koko roska: profiili infot + kirjoitetut postaukset
        return (
            
                        <div className="container">
            <h2 className="container_heading">Oma profiili</h2>
                 <div className="row fade-in">
            <div className="col-md-4">
 
            <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
                 <img id="img_profile" src={this.state.user.pictureURL}/> 
            <h3>{this.state.user.field}</h3>
            {/* <h4>{this.state.user.campus}</h4>*/}
            
           
               </div>
             <div className="col-md-8">
                    {posts}               
               </div>

               <div className="row">
                    <p className="text-center addMargin">
                        <Button onClick={this.getALL} className="text-center">Lataa lisää..</Button>
                    </p>
            </div>
               </div>
            </div> 
          
            

        );
           
    }
    
    
  
 

});



export default class Header extends Profile {
    
}
