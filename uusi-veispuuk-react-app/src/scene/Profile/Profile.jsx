import React from 'react';
import * as firebase from 'firebase';
import './Profile.css';
import $ from 'jquery';
import { Button ,Modal } from 'react-bootstrap';
import Container from '../Home/Container.jsx'
import data from './Userdata.json'
import userName from './Profilename.jsx'
import posts from './Profileposts.jsx'
import comments from '../Home/Comment.jsx'
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import Profileposts from './Profileposts.jsx'
import Post from './Profileposts.jsx'

var Profile = React.createClass({
    render: function () {
        
        function showimage() {
         var storageRef = firebase.storage().ref();
         var spaceRef = storageRef.child('images/0.jpg');
         storageRef.child('images/0.jpg').getDownloadURL().then(function(url) {
             var profiilikuva = url;
             alert(url);
             document.querySelector('img').src = 'profiilikuva';
             
             var database = firebase.database();

         });

     }
        
        return (
            <div id="profiilikuva">
                <img src="https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae"/> 
            <br/>
            
            <div className="profilePostaukset">
            <Post />
            </div>
            
              </div>
            

        );
           
    }
    
  
 

});



export default class Header extends Profile {
    
}