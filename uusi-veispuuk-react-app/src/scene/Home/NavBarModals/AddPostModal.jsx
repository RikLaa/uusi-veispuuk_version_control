import React from 'react';
import { Modal } from 'react-bootstrap';

var AddPostModal = React.createClass({
    render: function() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.onClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aloita keskustelu</Modal.Title>
                            <br />
        
                            <hr />

                        </Modal.Header>
                    </Modal>
            </div>
        );
    }
});

export default AddPostModal;