import React, { Component } from 'react';

import HeaderChat from '../HeaderChat/HeaderChat.js';
import ContentChat from '../ContentChat/ContentChat.js';
import SendMessageForm from '../SendMessageForm/SendMessageForm.js';

import './Chat.css';


class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <HeaderChat />
        <ContentChat />
        <SendMessageForm />
      </div>
    );
  }
}


export default Chat;


