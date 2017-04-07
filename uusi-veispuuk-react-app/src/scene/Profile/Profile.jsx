import axios from 'axios';
import React from 'react';
import './Profile.css';
// import $ from 'jquery';
import { Button ,Modal } from 'react-bootstrap';
import Container from '../Home/Container.jsx'
import data from './Userdata.json'
import userName from './Profilename.jsx'
import posts from './Profileposts.jsx'
import comments from '../Home/Comment.jsx'
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import Profileposts from './Profileposts.jsx'
import Post from './Profileposts.jsx'
import Comment from '../Home/Comment.jsx'
import Profilename from './Profilename.jsx'
import './Profile.css'

var Profile = React.createClass({
    render: function () {
        
        return (
            <div id="profiilikuva">
                <img src="https://firebasestorage.googleapis.com/v0/b/uusi-veispuuk-react-app.appspot.com/o/images%2F0.jpg?alt=media&token=c26f5dda-4ffa-460d-855a-c1d71c5dd4ae"/> 
            <br/>
            
            <div className="profilePostaukset">
            <Post />

            <div>
            
              </div>
            </div>
                            <div className="enimi">
                                <h2>Ismo</h2>
                                
                            </div>
                            <div className="snimi">
                                <h2>Insinööri</h2>
                                
                            </div>
                            <div className="userinfo">
                                <p>Olen ismo ja opiskelen insinööriksi.</p>
                            </div>                   
                               </div> 
           
            
            

        );
           
    }
    
    
  
 

});



export default class Header extends Profile {
    
}