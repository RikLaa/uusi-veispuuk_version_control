import React from 'react';
import { Modal } from 'react-bootstrap';

var AddPictureModal = React.createClass({
    render: function() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.onClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Lisää kuva</Modal.Title>
                            <br />
        
                            <hr />

                        </Modal.Header>
                    </Modal>
            </div>
        );
    }
});

export default AddPictureModal;
