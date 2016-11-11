import React from 'react';



var Comment = React.createClass({
    render: function () {
        return (
            <div key={this.props.keyValue}>
                <p>{this.props.content}</p>
                <p>{this.props.userName}</p>
                <small>{this.props.date} klo {this.props.time}</small>
                <hr />
            </div>
        );
    }
});

export default Comment;