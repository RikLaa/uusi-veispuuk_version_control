import React from 'react';
import { Button, FormGroup, Form, FormControl, Col, Checkbox, ControlLabel, InputGroup, DropdownButton, MenuItem,FieldGroup, Modal, poover,tooltip } from 'react-bootstrap';
import $ from 'jquery';


var Registration = React.createClass({
    getInitialState: function() {
        return{showModal: false}
       },
    componentDidMount: function () {
        $('#registerButton').click(function () {
            console.log("click");
        });
    },
    Open: function () {
        this.setState ({
            showModal: true
        })
    },
    
    //Handle add picture
  addPicture: function(e){
      console.log(e.target);
      var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        console.log(e.target.result);
        document.getElementById("image_esikatselu").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);
  },
    
    //validate form text inputs
    validateText: function (){
           var x = document.forms["rekisterointi"]["formHorizontalFirstName"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
     
    },
    
    
    render: function () {
        return (
            <div className="container">
                <div className="row">
               
  
<Form horizontal name="rekisterointi" onsubmit="return validateForm()" method="#" >
                         <h3>Rekisteröidy</h3>
    <FormGroup controlId="formHorizontalFirstName" name="formHorizontalFirstName" >
      <Col componentClass={ControlLabel} sm={2}>
        Etunimi
      </Col>
      <Col sm={10}>
        <FormControl type="name" placeholder="" />
      </Col>
    </FormGroup>
        
        <FormGroup controlId="formHorizontalLastName">
      <Col componentClass={ControlLabel} sm={2}>
        Sukunimi
      </Col>
      <Col sm={10}>
        <FormControl type="name" placeholder="" />
      </Col>
    </FormGroup>
                       
                         
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Sähköposti
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="" />
          Rekisteröityäksesi tarvitset voimassaolevan JAMK:in sähköpostiosoitteen.
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
                         
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Salasana uudestaan
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="" />
      </Col>
    </FormGroup>
                         
   <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Lataa kuva
      </Col>
      <Col sm={10}>
      
<input type="file" id="uploadimage" name="datafile" size="45" onChange= {this.addPicture} />
        <img id="image_esikatselu"/>
        
             </Col>
    </FormGroup>
                         
    
     <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
        <ControlLabel>Kampus</ControlLabel>
      </Col>
    <Col sm={10}> 
   
    
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Rajakatu</option>
        <option value="other">Dynamo</option>
        <option value="other">Suomalainen Musiikkikampus</option>
        <option value="other">Biotalousinstituutti</option>
      </FormControl>
    
         </Col>
    </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Koulutusala
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Olen 18 vuotias</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button id="registerButton" bsStyle="success" type="submit" onClick={this.Open} >
          Rekisteröidy
        </Button>
      </Col>
    </FormGroup>
  </Form> 
                    
<div>
   <Modal show={this.state.showModal}>
    <Modal.Header>
       <h1>Rekisteröitymisesi onnistui</h1></Modal.Header>
       
       <Modal.Body>
            <h4></h4>
            <p>Voit nyt kirjautua sisään Veispuukkiin.</p>
           <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Sähköposti
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="" />
              <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Salasana
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="" />
      </Col>
    </FormGroup>
        
      </Col>
    </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

    </Modal> 
</div>       
                    
                    
                    
                </div>
            </div>
        );
    }
});


export default Registration;