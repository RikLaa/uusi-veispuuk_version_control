import React from 'react';
import { Button, FormGroup, Form, FormControl, ControlLabel, Modal, Image } from 'react-bootstrap';

var AddPictureModal = React.createClass({
    
        //Handle add picture
  addPicture: function(e){
      console.log(e.target);
      var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        //console.log(e.target.result);
        document.getElementById("image_thumb").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);
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
                                        <Image id="image_thumb" responsive/>
                                        <h5 className="h5_center">Esikatselu</h5>
                                        <div className="col-md-10 col-md-offset-3">
                                            <label className="btn btn-default btn-file">
                                            <input id="add_picture" type="file" name="datafile" size="45" onChange={this.addPicture}  ref='picture'/>
                                            </label>
                                        </div>
                                    </FormGroup>
                                </div>

                                <FormGroup controlId="formHorizontal">
                                    <div className="col-sm-2 coll-sm-offset">
                                        <ControlLabel>Valitse # </ControlLabel>
                                    </div>

                                    <div className="col-sm-10">
                                        <FormControl componentClass="select" placeholder="select">
                                
                                            <option value="other">#Pasin koodit</option>
                                            <option value="other">#Vain insinööri jutut</option>
                                            <option value="other">#Kissa</option>
                                            <option value="other">#Kalja</option>
                                        </FormControl>
                                    </div>
                                </FormGroup>

                                </div>
                            </Form>        
                            
                    </Modal.Body>
                <Modal.Footer>
            <div className="col-sm-3 col-md-offset-9">
           <Button type="submit" bsStyle="success" onClick={this.props.onClick}>Julkaise</Button>
             </div>
                </Modal.Footer>
            
                    </Modal>
            </div>
        );
    }
});

export default AddPictureModal;
