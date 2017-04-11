import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';
import $ from 'jquery';

import { Button, Modal, ControlLabel, FormGroup, Form, Col, FormControl, Checkbox} from 'react-bootstrap';

import './Login.css'; 

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
});

var LoginBox = React.createClass({
    getInitialState: function() {
        return{showModal: true}
       },
    
    handleSignIn: function () {
          var email = ReactDOM.findDOMNode(this.refs.email);
          var password = ReactDOM.findDOMNode(this.refs.password);
        
        
        
         $.ajax({
            method: 'post',
            url: '/api/login',
            data: {
                email: email.value,
                password: password.value
            }
        }).done( function(response) {
              console.log(response);
             
          
          if (response) {
              // kirjautuminen onnistui
              browserHistory.push('/home/main');
        
          } else {
              // ei onnistunut
                  alert("Väärä käyttäjätunnus/salasana");
          }
             
          })
            
    },
    render: function () {
        return (
            


                <div>
                <Modal show={this.state.showModal} id="modal_login">
                <Modal.Header><h1>Tervetuloa!</h1></Modal.Header>
                <Modal.Body> 
                             <div id="modal_form_login"> 
                                 <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Sähköposti
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl ref="email" type="email" placeholder="" />
                                    </Col>
                                      </FormGroup>  
                                    <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Salasana
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl ref="password" type="password" placeholder="" />
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
               
                    <Modal.Footer id="modal_login_footer"> 
                
                        
                        
                    <Button type="submit" bsStyle="success" onClick={this.handleSignIn} >Kirjaudu sisään</Button>
                                       
                     
                        <Button type="submit" bsStyle="primary"> <Link id="button1" to="registeration">Rekisteröidy</Link></Button>
                        
                         <Button type="submit" bsStyle="info"> <Link id="button1" to="FAQ">FAQ</Link></Button>
                    </Modal.Footer>
                </Modal>
                
                </div>
                
                
                
          
        );
    }
});

export default Login;
