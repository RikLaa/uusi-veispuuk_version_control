import React from 'react';
import Comment from './Comment.jsx';
import { Modal } from 'react-bootstrap';

var Post = React.createClass({
    getInitialState: function () {
        return {
            // tämä arvo määrää onko Modal avattuna vai suljettua
            showModal: false
        }
    },
    open: function () {
        // avataan Modal määrittämällä showModal arvoksi true
        this.setState({
            showModal: true
        }); 
    },
    close: function () {
        // suljetaan Modal määrittämällä showModal arvoksi false
        this.setState({
            showModal: false
        });
    },
    render: function () {
        // käydään läpi kaikki kommentit ja renderoidaan ne näytölle Comment -komponentin avulla
        var comments = this.props.comments.map(function (comment) {
            console.log(comment);
            var key = comment.commentId;
            var content = comment.content;
            return (
                 <Comment key={key} content={content} />
            );    
        });

        return (
            <div>
                <div onClick={this.open} className="col-md-2 addBorder">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
                {/* Modalin show -property määrittää onko model avattuna vai ei. Sille annettaan this.state.showModal arvo
                    joka määritettiin ylempänä */}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        <p>{this.props.content}</p>
                        <hr />
                        {comments}
                    </Modal.Header>
                </Modal>

            </div>
        );
    }
});

export default Post;