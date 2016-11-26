import React from 'react';
import Comment from './Comment.jsx';
import { Button, Form, FormControl, FormGroup, Modal } from 'react-bootstrap';

var Post = React.createClass({
    getInitialState: function () {
        return {
            // tämä arvo määrää onko Modal avattuna vai suljettua
            showModal: false,
            comments: this.props.comments
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
    addComment: function() {
        console.log(this.state.comments);
        var comments = this.state.comments;

        var key = this.state.comments.length + 1;
        var content = document.getElementById('comment-text-field').value;
        var date = 'Mon Aug 12';
        var time = '19:45';
    
        var newComment = {
            commentID: key,
            content: content,
            date: date,
            time: time
        };

        comments.push(newComment);
        this.setState({
            comments: comments
        });

        // nollataan texbox
        document.getElementById('comment-text-field').value = '';

    },
    render: function () {


        // käydään läpi kaikki kommentit ja renderoidaan ne näytölle Comment -komponentin avulla
         var comments = this.props.comments.map(function (comment) {
             /*var userID = comment.userID;
             
             var name = this.props.users.map( function(user) {
                 if (userID === user.userID) {
                     var nameString = user.firstName + " " + user.lastName;
                     return nameString;
                 } else {
                     return "";
                 }
             });*/

             var key = comment.commentID;
             var content = comment.content;
             var date = comment.date.slice(0, 11);
             var time = comment.date.slice(16, 21);
            //  console.log(time);
             return (
                  <Comment key={key} userName={name} content={content} date={date} time={time}/>
             );    
         });

         

         // renderoidaan postaus näytölle
        return (
            <div>
                <div onClick={this.open} className="col-md-3">
                    <div className="addBorder postBox post-box-color">
                        <h3 className="title-color">{this.props.title}</h3>
                        <p>{this.props.content}</p>
                    </div>
                </div>
                {/* Modalin show -property määrittää onko model avattuna vai ei. Sille annettaan this.state.showModal arvo
                    joka määritettiin ylempänä */}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title className="title-color">{this.props.title}</Modal.Title>
                        <br />
                        <p>{this.props.content}</p>
                        <p>{this.props.userName}</p>
                        <p>#{this.props.tag}</p>
                       <small>{this.props.date} klo {this.props.time}</small>
                        <hr />
                        {comments}

                        <Form>
                            <FormGroup>
                                <FormControl id="comment-text-field" bsSize="large" className="comment-text-field" componentClass="textarea"></FormControl>
                            </FormGroup>
                            
                            <FormGroup>
                                <Button onClick={this.addComment} className="pull-right">Lähetä</Button>
                            </FormGroup>
                        </Form>

                        
                    </Modal.Header>
                </Modal>

            </div>
        );
    }
});

export default Post;