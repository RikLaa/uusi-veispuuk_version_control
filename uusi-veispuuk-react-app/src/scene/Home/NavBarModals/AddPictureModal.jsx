import React from 'react';
import { Button, FormGroup, Form, FormControl, ControlLabel, Modal, Image } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import ReactDOM from 'react-dom';

var AddPictureModal = React.createClass({
    
        //Handle add picture 
  addPicture: function(e){
    //  console.log(e.target);
      var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
       console.log(e.target.result);
        var image = e.target.result;
       //console.log(image);

        document.getElementById("image_thumb").src = e.target.result;
        
        
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);
  },
    
    handleUserMessage: function (e) {
       var image = ReactDOM.findDOMNode(this.refs.finalImage);
        var tag = ReactDOM.findDOMNode(this.refs.tag);
     //  console.log(tag);
        console.log(image);
        // call the sendmessages of ChatContainer throught the props
        this.sendMessage(image.src, tag.value);
        //this.props.sendMessage(content);
        //this.props.sendMessage(tag);
          
      
        },
   
    // add a new message AND update the messages list
  sendMessage: function(image,tag) {

      $.ajax({
          method: 'post',
          url: '/api/posts/image',
          data: {
              image: image,
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

    
    render: function() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.onClick}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">Lisää kuva</Modal.Title>
                        </Modal.Header>
                    
                        <Modal.Body>
                                
                            <Form horizontal>
                                <div className="Row"> 

                                <div className="col-sm-12 coll-sm-offset"> 
                                    <FormGroup controlId="formHorizontal">
                                        <Image id="image_thumb" ref='finalImage' responsive/>
                                        <h5 className="h5_center">Esikatselu</h5>
                                        <div className="col-md-10 col-md-offset-3">
                                            <label className="btn btn-default btn-file">
                                            <input id="add_picture" type="file" name="datafile" size="45" onChange={this.addPicture}  ref='picture'/>
                                          <p>Maksimi kuvan koko: 100 kb</p></label>
                                        </div>
                                    </FormGroup>
                                </div>

                                <FormGroup controlId="formHorizontal">
                                    <div className="col-sm-2 coll-sm-offset">
                                        <ControlLabel>Valitse # </ControlLabel>
                                    </div>

                                    <div className="col-sm-10">
                                        <FormControl ref='tag' componentClass="select" placeholder="select">
                                
                                            <option value="PasinKoodit">#PasinKoodit</option>
                                            <option value="VainInsinöörojutut">#VainInsinööriJutut</option>
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
           <Button type="submit" bsStyle="success" onClick=/*{this.props.onClick}*/{this.handleUserMessage}>Julkaise</Button>
             </div>
                </Modal.Footer>
            
                    </Modal>
            </div>
        );
    }
});

export default AddPictureModal;
