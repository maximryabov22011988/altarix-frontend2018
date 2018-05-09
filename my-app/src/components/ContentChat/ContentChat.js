import React, { Component } from 'react';

import Message from '../Message/Message';


class ContentChat extends Component {
  render() {
    return (
      <ul className="chat__messages">
        {this.props.messages.map((message, i) => (
          <Message key={i} {...message} />
        ))}
      </ul>
    );
  }
}


export default ContentChat;
