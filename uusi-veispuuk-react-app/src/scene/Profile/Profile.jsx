import React from 'react';
import * as firebase from 'firebase';
import './Profile.css';
import $ from 'jquery';
import Post from '../Home/Post.jsx';
import { Button ,Modal } from 'react-bootstrap';
import Container from '../Home/Container.jsx'
import data from './Userdata.json'
import userName from './Profilename.jsx'
import posts from './Profileposts.jsx'
import comments from '../Home/Comment.jsx'
import {Form, FormControl, FormGroup} from 'react-bootstrap';

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
            
              </div>

        );
        
  
   
    }
    
});

var Profilename = React.createClass({
    render () {
    
    function showName() {
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user signed in");
        
        var database = firebase.database();
        var usersTable = firebase.database().ref('users');
    var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
    
    var users = [];
                var usersRef = usersTable.once('value', function(snapshot) {
                    users = $.map(snapshot.val(), function(user, index) {
                        return [user];
                    });
   
});
     
} 


)}
});
    }
    }
});

export default class Header extends Profile {

}