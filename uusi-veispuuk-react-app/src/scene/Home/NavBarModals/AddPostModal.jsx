import React from 'react';
import { Button, FormGroup, Form, FormControl, ControlLabel, Modal } from 'react-bootstrap';

var AddPostModal = React.createClass({
    getInitialState: function() {
        return{
            newPosts: []
        };
    },
    addPost: function(e) {
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

    },
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
                                        <FormControl id="postHeaderInput" type="text" placeholder="Otsikko" />    
                                        <FormControl id="postContentInput" componentClass="textarea" placeholder="Sisältö" rows="12" />
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
                                        <FormControl id="tagSelect"  componentClass="select" placeholder="select">
                                            <option value="pasin_koodit">#Pasin koodit</option>
                                            <option value="vaininsinoorijutu">#Vain insinööri jutut</option>
                                            <option value="kissa">#Kissa</option>
                                            <option value="kalja">#Kalja</option>
                                        </FormControl>
                                    </div>
                                </FormGroup>
                            </div>
                        </Form>        
                                            
                    </Modal.Body>
                <Modal.Footer>
            <div className="col-sm-3 col-md-offset-9">
           <Button type="submit" bsStyle="success" onClick={this.addPost}>Julkaise</Button>
             </div>
                </Modal.Footer>
                    
                    </Modal>
            </div>
        );
    }
});

export default AddPostModal;