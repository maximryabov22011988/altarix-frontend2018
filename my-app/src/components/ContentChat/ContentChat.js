import React, { Component } from 'react';

import Message from '../Message/Message.js';


class ContentChat extends Component {
  render() {
    return (
      <ul className="chat__messages">
        <Message />
        <Message />
        <Message isOutgoing />
        <Message />
        <Message isOutgoing />
        <Message />
        <Message isOutgoing />
        <Message isOutgoing />
      </ul>
    );
  }
}


export default ContentChat;
