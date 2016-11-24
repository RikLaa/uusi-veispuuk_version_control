import React from 'react';
import { Button, FormGroup, Form, FormControl, Col, Checkbox, ControlLabel, InputGroup, DropdownButton, MenuItem,FieldGroup, Modal, poover,tooltip, HelpBlock  } from 'react-bootstrap';

var AddPostModal = React.createClass({

    render: function() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.onClick}>
                        <Modal.Header closeButton>
                        <Modal.Title><h3 className="h3_center">Aloita keskustelu</h3></Modal.Title> </Modal.Header>
                        <Modal.Body>
            
        <Form horizontal>
            <div className="Row"> 
            <div className="col-sm-12 coll-sm-offset">
        <FormGroup controlId="formHorizontal">
            <ControlLabel>Kirjoita viestisi </ControlLabel>
        <FormControl type="" placeholder="Otsikko" />    
      <FormControl componentClass="textarea" placeholder="Sisältö" rows="12" />
        </FormGroup>  
            </div>
            </div>
            
            <hr />
            
        <div className="Row"> 
        <FormGroup controlId="formHorizontal">
            <div className="col-sm-2 coll-sm-offset">
            <ControlLabel>Valitse # </ControlLabel>
            </div>
            <div className="col-sm-10">
             <FormControl inline componentClass="select" placeholder="select">
           
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
           <Button type="submit" bsStyle="success">Julkaise</Button>
             </div>
                </Modal.Footer>
                    
                    </Modal>
            </div>
        );
    }
});

export default AddPostModal;