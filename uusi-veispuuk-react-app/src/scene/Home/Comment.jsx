import React from 'react';


var Comment = React.createClass({
    render: function () {
        return (
            <div key={this.props.keyValue}>
                <p>{this.props.content}</p>
                <hr />
            </div>
        );
    }
});

export default Comment;