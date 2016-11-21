import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

import { Button, Modal, ControlLabel, FormGroup, Form, Col, FormControl, Checkbox} from 'react-bootstrap';

import './Login.css';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBKdpXjEkwmATZJCifxicLQirKkcGTN8oY",
    authDomain: "uusi-veispuuk-react-app.firebaseapp.com",
    databaseURL: "https://uusi-veispuuk-react-app.firebaseio.com",
    storageBucket: "uusi-veispuuk-react-app.appspot.com",
    messagingSenderId: "175581837886"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("user signed in");
  } else {
    console.log("user NOT signed in");
  }
});

var Login = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row vertical-center">
                    <LoginBox />
                </div>
            </div>
        );
    }
})

var LoginBox = React.createClass({
    getInitialState: function() {
        return{showModal: true}
       },
    
    handleSignIn: function () {

        var email = "testi@testi.com";
        var password = "salasana";
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        console.log("signed in");
            
    },
    render: function () {
        return (
            


                <div>
                <Modal show={this.state.showModal} id= "modal_login">
                <Modal.Header><h1>Tervetuloa!</h1></Modal.Header>
                <Modal.Body> 
                             <div id="modal_form_login"> 
                                 <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Sähköposti
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl type="email" placeholder="" />
                                    </Col>
                                      </FormGroup>  
                                    <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Salasana
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl type="password" placeholder="" />
                                    </Col>
                                    </FormGroup>
                                       <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                    <Checkbox>Muista minut</Checkbox>
                                    </Col>
                                    </FormGroup>
                                         <FormGroup>
                                    <Col smOffset={2} sm={10}>
    
                                    </Col>
                                    </FormGroup>
                                    
                                 </Form>        
                            </div> 
                </Modal.Body>
               
                    <Modal.Footer id= "modal_login_footer"> 
                { this.props.children }
                        
                        
                    <Button type="submit" bsStyle="success" onClick={this.handleSignIn} > <Link id="button1" to="home">Kirjaudu sisään</Link></Button>
                                       
                     
                        <Button type="submit" bsStyle="primary" onClick={this.handleSignIn}> <Link id="button1" to="registeration">Rekisteröidy</Link></Button>
                        
                         <Button type="submit" bsStyle="info" onClick={this.handleSignIn}> <Link id="button1" to="FAQ">FAQ</Link></Button>
                    </Modal.Footer>
                </Modal>
                
                </div>
                
                
                
          
        );
    }
});


          


//module.exports = Testi;
export default Login;
