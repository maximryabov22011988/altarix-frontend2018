import React, { Component } from 'react';

import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';


class ContentChat extends Component {
  render() {
    return (
      <ul className="chat__messages">
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
      </ul>
    );
  }
}


export default ContentChat;
