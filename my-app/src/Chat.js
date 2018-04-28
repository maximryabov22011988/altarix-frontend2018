import React, { Component } from 'react';

import HeaderChat from './ChatHeader';
import ContentChat from './ChatContent';
import SendMessageForm from './ChatSendMessageForm';

import './Chat.css';


class Chat extends Component {
  render() {
    return (
      <div className="chat__wrapper">
        <HeaderChat />
        <ContentChat />
        <SendMessageForm />
      </div>
    );
  }
}


export default Chat;


