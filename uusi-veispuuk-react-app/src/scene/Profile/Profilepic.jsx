import React from 'react';
import NavBar from '../Home/NavBar.jsx';
import firebase from 'firebase';
import './Profile.css';

var Profilepic = React.createClass ({
    render: function () {
        
// Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = '0.jpg';
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath

// File name is 'space.jpg'
var name = spaceRef.name

// Points to 'images'
var imagesRef = spaceRef.parent;
        
        // Create a reference with an initial file path and name
var storage = firebase.storage();
var pathReference = storage.ref('images/0.jpg');

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae')

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae');
   
        
        storageRef.child('images/0.jpg').getDownloadURL().then(function(url) {
            
            var profiilikuva = url;
  // Get the download URL for 'images/stars.jpg'
  // This can be inserted into an <img> tag
  // This can also be downloaded directly
}).catch(function(error) {
  // Handle any errors
});
        
        
        }
});