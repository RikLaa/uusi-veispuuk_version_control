import React from 'react';
import { Button } from 'react-bootstrap';
var Registration = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <Button bsStyle="success">rekistöreöidy</Button>
                </div>
            </div>
        );
    }
});

export default Registration;