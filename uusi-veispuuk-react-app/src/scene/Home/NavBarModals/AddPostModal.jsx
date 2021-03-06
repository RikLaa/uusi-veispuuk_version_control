import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Button, FormGroup, Form, FormControl, ControlLabel, Modal } from 'react-bootstrap';

var AddPostModal = React.createClass({
    getInitialState: function() {
        return{
            newPosts: []
        };
    },
   /* addPost: function(e) {
        var d = new Date();
        var key = d.getMilliseconds();
        var title = document.getElementById('postHeaderInput').value;
        var content = document.getElementById('postContentInput').value;
        var comments = [];
        var date = 'Sun Aug 19 2007 17:04:32 GMT+0300 (EEST)';
       
        var tag = document.getElementById('tagSelect').value;

        var newPost = {
            postID: key,
            userID: 10,
            title: title,
            content: content,
            comments: comments,
            date: date,
            tag: tag    
        };
        
        var allNewPosts = this.state.newPosts;
        allNewPosts.unshift(newPost);

        this.props.addPostToParent(newPost);

    }, */
    
    
    handleUserMessage: function (e) {
        
       var title = ReactDOM.findDOMNode(this.refs.title);
        var content = ReactDOM.findDOMNode(this.refs.content);
        var tag = ReactDOM.findDOMNode(this.refs.tag);
      if (title !== '', content !== '') {
        // call the sendmessages of ChatContainer throught the props
        this.sendMessage(title.value, content.value, tag.value);
        //this.props.sendMessage(content);
        //this.props.sendMessage(tag);
          
      }
      // Prevent default and clear the textarea
      event.preventDefault();
      this.refs.title.value = null;
    this.refs.content.value = null;
    
    },
    
    // add a new message AND update the messages list
  sendMessage: function(title,content,tag) {

      $.ajax({
          method: 'get',
          url: '/api/posts/create',
          data: {
              title: title,
              content: content,
              tag: tag
        
          }
      })
          .done( function(data) {
              console.log(data);
             // Tähän joku fiksumpi ratkaisu, jos aikaa löytyy. Nyt aiheuttaa typerän välähdyksen kun sivu päivittyy
            function pageReload() {
             location.reload();
              }
           pageReload();
          })


    
  },

      
      
      
      

    
        //Ottaa formin datan talteen
  /*  StoreFormData: function (e) {
     
      
        // Console.log tulostaa inputin valuen vain jos on määritelty näin:ReactDOM.findDOMNode(this.refs.email); jos laittaa (this.refs.email.value); Niin valuea ei saada. Kuitenkaan tämä taktiikka ei sitten toimi loppuun asti. DUH
        //Palataan asiaan jos liikaa aikaa..
        
        var title = ReactDOM.findDOMNode(this.refs.title);
        var content = ReactDOM.findDOMNode(this.refs.content);
        var tag = ReactDOM.findDOMNode(this.refs.tag);
        console.log(title.value);
        console.log(content.value);
        console.log(tag.value);
        */
        
  
    //    { this.Open();}
 //   },
    
    

    render: function() {

        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.onClick}>
                        <Modal.Header closeButton>
                        <Modal.Title className="text-center">Aloita keskustelu</Modal.Title> </Modal.Header>
                        <Modal.Body>
            
                        <Form horizontal>
                            <div className="Row"> 
                                <div className="col-sm-12 coll-sm-offset">
                                    <FormGroup>
                                        <ControlLabel>Kirjoita viestisi </ControlLabel>
                                        <FormControl id="postHeaderInput" type="text" ref='title' placeholder="Otsikko" />    
                                        <FormControl id="postContentInput" componentClass="textarea" ref='content' placeholder="Sisältö" rows="12" />
                                    </FormGroup>  
                                </div>
                            </div>
                            
                            <hr />
                            
                            <div className="Row"> 
                                <FormGroup>
                                    <div className="col-sm-2 coll-sm-offset">
                                        <ControlLabel>Valitse # </ControlLabel>
                                    </div>
                            
                                    <div className="col-sm-10">
                                        <FormControl id="tagSelect" ref='tag' componentClass="select" placeholder="select">
                                            <option value="pasinKoodit">#PasinKoodit</option>
                                            <option value="VainInsinööriJutut">#VainInsinöörijutut</option>
                                            <option value="Kissa">#Kissa</option>
                                            <option value="Kalja">#Kalja</option>
                                        </FormControl>
                                    </div>
                                </FormGroup>
                            </div>
                        </Form>        
                                            
                    </Modal.Body>
                <Modal.Footer>
            <div className="col-sm-3 col-md-offset-9">
           <Button type="submit" bsStyle="success" onClick={this.handleUserMessage}>Julkaise</Button>
             
             </div>
                </Modal.Footer>
                    
                    </Modal>
            </div>
        );
    }
});

export default AddPostModal;
