import React from 'react';

import 'react-bootstrap/dist/react-bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '!style!css!bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
//require ('bootstrap/dist/css/bootstrap.css');
import { ButtonToolbar, Button, Modal, Tooltip, Popover, OverlayTrigger } from 'react-bootstrap';


var Login = React.createClass({
    render: function () {
        return (
            <div className="row vertical-center">asdf
                
                    <LoginBox />
                
            </div>
        );
    }
});

var LoginBox = React.createClass({
    render: function() {
        return (
            <div className="col-md-4 col-md-offset-4 login-box border">
                <span>Example</span>
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
        
                </form>
            </div>
        );
    }
})

module.exports = Login;
