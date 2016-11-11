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
             var userID = comment.userID;
             
             var name = this.props.users.map( function(user) {
                 if (userID === user.userID) {
                     var nameString = user.firstName + " " + user.lastName;
                     return nameString;
                 } else {
                     return "";
                 }
             });

             var key = comment.commentID;
             var content = comment.content;
             var date = comment.date.slice(0, 11);
             var time = comment.date.slice(16, 21);
             //console.log(time);
             return (
                  <Comment key={key} userName={name} content={content} date={date} time={time}/>
             );    
         }.bind(this));

         // renderoidaan postaus näytölle
        return (
            <div>
                <div onClick={this.open} className="col-md-3">
                    <div className="addBorder postBox">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.content}</p>
                    </div>
                </div>
                {/* Modalin show -property määrittää onko model avattuna vai ei. Sille annettaan this.state.showModal arvo
                    joka määritettiin ylempänä */}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        <br />
                        <p>{this.props.content}</p>
                        <p>{this.props.userName}</p>
                        <p>#{this.props.tag}</p>
                       <small>{this.props.date} klo {this.props.time}</small>
                        <hr />
                        {comments}
                    </Modal.Header>
                </Modal>

            </div>
        );
    }
});

export default Post;