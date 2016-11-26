import React from 'react';
import { Button, FormGroup, Form, FormControl, Col, Checkbox, ControlLabel, Modal } from 'react-bootstrap';
import $ from 'jquery';
import firebase from 'firebase';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';



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
    close: function () {
        // suljetaan Modal määrittämällä showModal arvoksi false
        this.setState({
            showModal: false
        });
    },
    
    //handle submit Form Validation
    validateForm: function (e) {
      //  var divDOMNode = ReactDOM.findDOMNode(ref);
        // prevent normal submit event
        e.preventDefault();
      //  var name = this.refs.name.value;
        // Console.log tulostaa inputin valuen vain jos on määritelty näin:ReactDOM.findDOMNode(this.refs.name); jos laittaa (this.refs.email.value); Niin valuea ei saada. Kuitenkaan tämä taktiikka ei sitten toimi loppuun asti. DUH
        //Palataan asiaan jos liikaa aikaa..
        
        var name = ReactDOM.findDOMNode(this.refs.name);
        // var email = ReactDOM.findDOMNode(this.refs.email.value);
        // var fname = ReactDOM.findDOMNode(this.refs.fname.value);
        var password = ReactDOM.findDOMNode(this.refs.password);
        var password2 = ReactDOM.findDOMNode(this.refs.password2);
        // var box = ReactDOM.findDOMNode(this.refs.box.value);
         console.log(name.value);
        console.log(password.value);
        console.log(password2.value);
        
   //     if (name.value === "" || name=="" || name==null) { } {
    //    alert("Name must be filled out");
    //    return false;
    //}
         if (name.value === null) {
         alert("Name must be filled out");
         return false;
     }
               if (password === null) {
        alert("password must be filled out");
       return false;}
       else { this.Open();}
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
            <div className="container">
                <div className="row">
<<<<<<< HEAD
                    <Button id="registerButton" bsStyle="success">rekisteröidy</Button>
=======
               

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
        <FormControl type="name" placeholder="" ref='fname' />
      </Col>
    </FormGroup>

        <FormGroup controlId="formHorizontalLastName" validationState="success">
      <Col componentClass={ControlLabel} sm={2}>
        Sukunimi
      </Col>
      <Col sm={10}>
        <FormControl type="name" placeholder="" ref='name'  />
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
>>>>>>> refs/remotes/origin/Develop
                    
                </div>
           
        );
    }
});


export default Registration;