import React from 'react';
import { Button, FormGroup, Form, FormControl, Col, Checkbox, ControlLabel, InputGroup, DropdownButton, MenuItem,FieldGroup } from 'react-bootstrap';
import $ from 'jquery';


var Registration = React.createClass({
    componentDidMount: function () {
        $('#registerButton').click(function () {
            console.log("click");
        });
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
    
    
    render: function () {
        return (
            <div className="container">
                <div className="row">
               
  

                     <Form horizontal>
                         <h3>Rekisteröidy</h3>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Etunimi
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
                         
       
    <label>  
<input type="file" id="uploadimage" name="datafile" size="45" onChange= {this.addPicture} />
        <img id="image_esikatselu"/>
        </label>    
                         
    
     <FormGroup>
           <Col componentClass={ControlLabel} sm={2}>
        Kampus
      </Col>
    <Col sm={10}> 
      <InputGroup>
        <FormControl type="text" />
        <DropdownButton
          componentClass={InputGroup.Button}
          id="input-dropdown-addon"
          title="">
          <MenuItem key="1">Dynamo</MenuItem>
            <MenuItem key="2">Rajakatu</MenuItem>
            <MenuItem key="3">Biotalousinstituutti</MenuItem>
            <MenuItem key="4">Suomalainen musiikkikampus</MenuItem>
            
        </DropdownButton>
      </InputGroup>
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
        <Button id="registerButton" bsStyle="success" type="submit">
          Rekisteröidy
        </Button>
      </Col>
    </FormGroup>
  </Form> 
                    
  
                    
                    
                    
                    
                </div>
            </div>
        );
    }
});
/*      <form id="registerform" autocomplete="on" method="" oninput="z1.value=a.value;z2.value=b.value" action="TÄHÄN_PHP_ACTION_MIKÄ_LÄHETTÄÄ_TIEDOT_KANTAAN">
  <fieldset>
  <legend>Rekisteröidy</legend>
    <label>Etunimi<br/>
      <input id="kokonimi" name="name" type="text" placeholder="" autofocus required size="45" />
    </label>
      <label>Sukunimi<br/>
      <input id="sukunimi" name="name" type="text" placeholder="" autofocus required size="45" />
    </label>

    <label>Sähköposti<br/>
      <input id="email" name="email" type="email" value="@student.jamk.fi" placeholder="" required size="45"/>
    </label>
    <p>Rekisteröityäksesi tarvitset voimassaolevan JAMK:in sähköpostiosoitteen</p>
    
       <label>Salasana<br/>
      <input id="salasana" name="password" type="password" placeholder="" autofocus required size="45"/>
    </label>
      
    <label>Kampus
  <input type="text" name="" list="kampus" placeholder="Valitse"/ >
  <datalist id="kampus">
   <option value="Rajakatu"/>
   <option value="Dynamo"/>
   <option value="Biotalousinstituutti"/>
   <option value="Suomalainen musiikkikampus"/>
      
  </datalist>
        </label>
          <label>Koulutusala<br/>
      <input id="ala" name="ala" type="text" placeholder="" autofocus required size="45" />
    </label>
      
      

    <label>  <br/>
<input type="file" id="uploadimage" name="datafile" size="45"/>
        <img id="image_esikatselu"/>
        </label>

     
  </fieldset>






 
<button type='submit' name='nappi' value='valmis' id='nappi'>Valmis</button>
</form> */

export default Registration;