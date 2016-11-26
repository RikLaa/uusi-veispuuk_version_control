import React from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';


var Registration = React.createClass({
    componentDidMount: function () {
        $('#registerButton').click(function () {
            console.log("click");
        });
    },
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <Button id="registerButton" bsStyle="success">rekisteröidy</Button>
                    
                </div>
            </div>
        );
    }
});


export default Registration;