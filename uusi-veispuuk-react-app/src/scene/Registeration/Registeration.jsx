import React from 'react';
import { browserHistory } from 'react-router';
import { Button, FormGroup, Form, FormControl, Col, Checkbox, ControlLabel, Modal } from 'react-bootstrap';
// import $ from 'jquery';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

import $ from 'jquery';



var Registration = React.createClass({
    getInitialState: function() {
        return{showModal: false}
       },
 
    Open: function () {
        this.setState ({
            showModal: true
        })
    },
    close: function () {
        // suljetaan Modal määrittämällä showModal arvoksi false
        this.setState({
            showModal: false
        });
    },
    createNewUserAjax: function(user) {
        console.log(user);
        
        $.ajax({
            method: 'post',
            url: '/api/register',
            data: user
        }) .done( function(response) {
              console.log(response);
          
          if (response) {
              // tallentaminen onnistui
              console.log('käyttäjä luotu');
              browserHistory.goBack();
          } else {
              // ei onnistunut
                  alert("Virhe käyttäjää luomisessa! Yritä uudestaan!");
          }
             
          })
    },
    
    //handle submit Form validation // ei tää oikeesti mitään validoi, kuha ottaa talteen
    validateForm: function (e) {
      //  var divDOMNode = ReactDOM.findDOMNode(ref);
        // prevent normal submit event
        e.preventDefault();
      //  var name = this.refs.name.value;
        // Console.log tulostaa inputin valuen vain jos on määritelty näin:ReactDOM.findDOMNode(this.refs.name); jos laittaa (this.refs.email.value); Niin valuea ei saada. Kuitenkaan tämä taktiikka ei sitten toimi loppuun asti. DUH
        //Palataan asiaan jos liikaa aikaa..
        
        var firstName = ReactDOM.findDOMNode(this.refs.firstName);
        var lastName = ReactDOM.findDOMNode(this.refs.lastName);
        var email = ReactDOM.findDOMNode(this.refs.email);
        var password = ReactDOM.findDOMNode(this.refs.password);
        var password2 = ReactDOM.findDOMNode(this.refs.password2);
        var campus = ReactDOM.findDOMNode(this.refs.campus);
        var field = ReactDOM.findDOMNode(this.refs.field);
        // var box = ReactDOM.findDOMNode(this.refs.box.value);
        /*console.log(firstName.value);
        console.log(lastName.value);
        console.log(email.value);
        console.log(password.value);
        console.log(password2.value);
        console.log(campus.value);
        console.log(field.value);*/
        

        if (password === null) {
            alert("password must be filled out");
       return false;}
       else { 
           //this.Open();
           var user = {
               firstName: firstName.value,
               lastName: lastName.value,
               email: email.value,
               password: password.value,
               campus: campus.value,
               field: field.value
           };
           
           this.createNewUserAjax(user);
           
       }
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
    handleSignIn: function () {
            
    },
    render: function () {
        return (
            <div className="container">
                <div className="row">

                    

               

<Form horizontal id="rekisterointi"  className="col-md-8 col-md-offset-2" onSubmit={this.validateForm} data-toggle="validator" method="#" >
                         <h3 className="h3_center">Rekisteröidy Veispuukkiin</h3><hr />
            <p>Veispuukki on sosiaalinen media opiskelijoille. Rekisteröidy nyt, niin pääset mukaan siihen parempaan opiskelijaelämään.</p>
            <p className="p_cursive">Vihreällä merkityt kohdat ovat pakollisia.</p>
            <hr />
            
    <FormGroup controlId="formHorizontalFirstName" name="formHorizontalFirstName" validationState="success" >
      <Col componentClass={ControlLabel} sm={2}>
        Etunimi
      </Col>
      <Col sm={10}>
        <FormControl type="name" placeholder="" ref='firstName' />
      </Col>
    </FormGroup>

        <FormGroup controlId="formHorizontalLastName" validationState="success">
      <Col componentClass={ControlLabel} sm={2}>
        Sukunimi
      </Col>
      <Col sm={10}>
        <FormControl type="name" placeholder="" ref='lastName'  />
      </Col>
    </FormGroup>
                       
                         
    <FormGroup controlId="formHorizontalEmail" validationState="success">
      <Col componentClass={ControlLabel} sm={2}>
        Sähköposti
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder=""  ref='email'/>
          Rekisteröityäksesi tarvitset voimassaolevan JAMK:in sähköpostiosoitteen.
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword" validationState="success">
      <Col componentClass={ControlLabel} sm={2}>
        Salasana
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="" ref='password' />
      </Col>
    </FormGroup>
                         
    <FormGroup controlId="formHorizontalPassword" validationState="success">
      <Col componentClass={ControlLabel} sm={2}>
        Salasana uudelleen
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="" ref='password2'/>
      </Col>
    </FormGroup>
                         
   <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Lataa kuva
      </Col>
      <Col sm={10}>
      
<input type="file" id="uploadimage" name="datafile" size="45" onChange={this.addPicture}  ref='picture'/>
        <img alt="preview" id="image_esikatselu"/>
        
             </Col>
    </FormGroup>
                         
    
     <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
        <ControlLabel>Kampus</ControlLabel>
      </Col>
    <Col sm={10}> 
   
      <FormControl ref='campus' componentClass="select" placeholder="select">
        <option value="select">Rajakatu</option>
        <option value="other">Dynamo</option>
        <option value="other">Suomalainen Musiikkikampus</option>
        <option value="other">Biotalousinstituutti</option>
      </FormControl>
    
         </Col>
    </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
      <Col  componentClass={ControlLabel} sm={2}>
        Koulutusala
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="" ref='field' />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox ref='box' validationState="success">Olen 18 vuotias</Checkbox>
      </Col>
    </FormGroup>
            

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button id="registerButton" bsStyle="success" type="submit" onClick={this.validateForm} >
          Rekisteröidy
        </Button>
      </Col>
    </FormGroup>
  </Form> 
                    
<div>
 {/* Rekisteröinti onnistui modaali*/}
            <Modal show={this.state.showModal} id="modal_rekisterointi">
       
    <Modal.Header closeButton onClick={this.close}>

       <h1>Rekisteröitymisesi onnistui</h1></Modal.Header>
       
       <Modal.Body id="modal_rekisterointi_body">
           <div id="modal_rekisterointi_teksti">
            <h4>Sait vahvistuksen sähköpostiisi.</h4>
            <p>
                Etkö saanut vahvistusta? <a>klikkaa tästä.</a>
            </p>
           </div>
         <div id="modal_form"> 
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
          <Modal.Footer id="modal_rekisterointi_footer">
              

              <Button type="submit" bsStyle="success" onClick={this.handleSignIn}> <Link id="button1" to="home">Kirjaudu sisään</Link>
        </Button>
     
          </Modal.Footer>

    </Modal> 
</div>       
                    
                    </div>    
                    
                </div>
           
        );
    }
});


export default Registration;