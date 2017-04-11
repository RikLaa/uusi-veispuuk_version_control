import React from 'react';
import $ from 'jquery';
import Comment from './Comment.jsx';
import { Button, Form, FormControl, FormGroup, Modal, Image } from 'react-bootstrap';
import './post.css';

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
        // jos tekstikentta on tyhja, ei lisata kommenttia
        if (document.getElementById('comment-text-field').value.length > 0) {
            var comments = this.state.comments;
            var content = document.getElementById('comment-text-field').value
            //console.log(this.props.postID);

            // create a new comment, get userID from ???? and postID from this.props
            var newComment = {
                userID: 1,
                postID: this.props.postID,
                content: content
            };

            $.ajax({
                method: 'post',
                url: '/api/comments',
                data: newComment
            }).done( function(data) {
                if (data) {
                    //console.log(data);
                    comments = this.state.comments;
                    comments[this.state.comments.length + 1] = data[0];

                    this.setState({
                        comments: comments 
                    })
                }
            }.bind(this))


            /*// Get the last comment in the post */
            //var last = this.state.comments.slice(-1)[0].commentID;
            //console.log(last);
            //// increment the id by one more
            //var key = last + 1;
            //var content = document.getElementById('comment-text-field').value;
            //var updated_at = '2017-03-28 10:08:01';
            //var created_at = '2017-03-28 10:08:01';

            //var newComment = {
                //commentID: key,
                //content: content,
                //created_at: created_at,
                //updated_at: updated_at
            //};

            //comments.push(newComment);
            //this.setState({
                //comments: comments
            /*});*/

            // nollataan texbox
            document.getElementById('comment-text-field').value = '';

        }
        
    },
    
    //onko postaus kuvapostaus vai tekstipostaus
    //if type=1 niin return tekstipostaus, jos muuta niin return kuvapostaus
    
    postCheck: function () {
        console.log(this.props.postType)
            if (this.props.postType == 1) {
      return (
                <div>
              <Modal.Title className="title-color">{this.props.title}</Modal.Title>
                        <p>{this.props.content}</p>
                        <p>username here{this.props.userName}</p>
                        <p>#{this.props.tag}</p>
                       <small>{this.props.date} klo {this.props.time}</small>
          </div>
      );
    } else {
      return (
                    <div>
                     <Image id="imagePost"src={this.props.image} responsive />
                        <p>username here{this.props.userName}</p>
                        <p>#{this.props.tag}</p>
                       <small>{this.props.date} klo {this.props.time}</small>
          </div>
      );
    }
        
    },
    
    
    thumbCheck: function () {
        console.log(this.props.postType)
            if (this.props.postType == 1) {
      return (
                <div>
                <h3 className="title-color">{this.props.title}</h3>
                            <p>{this.props.content}</p>
          </div>
      );
    }   
    },
    
    
    
    
    render: function () {


        // käydään läpi kaikki kommentit ja renderoidaan ne näytölle Comment -komponentin avulla
         var comments = this.props.comments.map(function (comment) {
             var userID = comment.userID;
            var postID = comment.postID;  
             var name = 'username here';
             var key = comment.commentID;
             var content = comment.content;
             var date = comment.created_at.slice(0, 11);
             var time = comment.created_at.slice(10, 21);
              //console.log(key);
             return (
                  <Comment key={key} keyValue={key} userName={name} content={content} date={date} time={time}/>
             );    
         });


         // renderoidaan postaus näytölle
        return (
            <div>
                <div onClick={this.open} className="col-md-3">
                    <div className="addBorder postBox post-box-color">
                        <div className="postBox-wrapper">
                         { this.thumbCheck() }
                            <div class="thumbnail">
                                <img src={this.props.image}></img>
                            </div>
                         
                        </div>
                    </div>
                </div>
                {/* Modalin show -property määrittää onko model avattuna vai ei. Sille annettaan this.state.showModal arvo
                    joka määritettiin ylempänä */}
                <Modal show={this.state.showModal} onHide={this.close}>
         
                    <Modal.Header closeButton>
                      
                { this.postCheck() }
                   
                        </Modal.Header>
                    
                        <Modal.Body>
                 
                       
                         {comments}
                
                       
                    </Modal.Body>
                     <Modal.Footer>
                         
                        <Form>
                            <FormGroup>
                                <FormControl id="comment-text-field" bsSize="large" className="comment-text-field" componentClass="textarea"></FormControl>
                            </FormGroup>
                            
                            <FormGroup>
                                <Button  bsStyle="success" onClick={this.addComment} className="pull-right">Lähetä</Button>
                            </FormGroup>
                        </Form>

                      </Modal.Footer>   
                    
                     
                
                </Modal>

            </div>
        );
    }
});

export default Post;
