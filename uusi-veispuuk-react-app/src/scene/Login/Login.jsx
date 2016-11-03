import React from 'react';
import { Link } from 'react-router';

import { Button } from 'react-bootstrap';

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
})

var LoginBox = React.createClass({
    render: function () {
        return (
            <div className="col-md-4 col-md-offset-4 login-box border">
                <form className="col-md-offset-1">
                    <div className="form-group">
                        <label>Etunimi</label>
                        <input id="exampleInputEmail1" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Sukunimi</label>
                        <input className="form-control" id="sukunimi-input"></input>
                    </div>

                    <div className="form-group">
                        <label>Sähköposti</label>
                    </div>
                    
                    { this.props.children }
                     <Button>
                        <Link to="home">Kirjaudu sisään</Link>
                    </Button>
                    <Button>
                        <Link to="registeration">Rekisteröidy</Link>
                    </Button>
                </form>
                
            </div>
        );
    }
});


export default Login;
