import React, { Component } from 'react';

import Message from '../Message/Message.js';

import './ContentChat.css';


class ContentChat extends Component {
  render() {
    return (
      <ul className="chat__messages">
        <Message isOutgoing={false} />
        <Message isOutgoing={false} />
        <Message isOutgoing={true} />
        <Message isOutgoing={false} />
        <Message isOutgoing={true} />
        <Message isOutgoing={false} />
        <Message isOutgoing={true} />
        <Message isOutgoing={true} />
      </ul>
    );
  }
}


export default ContentChat;
