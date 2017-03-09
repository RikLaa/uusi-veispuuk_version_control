import React from 'react';
import NavBar from '../Home/NavBar.jsx';
import firebase from 'firebase';
import './Profile.css';

var Profilepic = React.createClass ({
    render: function () {
        
//Luodaan viittaus firebase storagen juureen
var storageRef = firebase.storage().ref();

// Viitataan images- kansioon
var imagesRef = storageRef.child('images');

// Osoitetaan images- kansiossa olevaan tiedostoon nimeltä 0.jpg
var fileName = '0.jpg';
var spaceRef = imagesRef.child(fileName);


var path = spaceRef.fullPath


var name = spaceRef.name


var imagesRef = spaceRef.parent;
        

var storage = firebase.storage();
var pathReference = storage.ref('images/0.jpg');


var gsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae')

// Luodaan viittaus käyttämällä suoraan kuvan urlia
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae');
   
        
        storageRef.child('images/0.jpg').getDownloadURL().then(function(url) {
            
            var profiilikuva = url;
  
 
}).catch(function(error) {
  // Handle any errors
});
        
        
        }
});