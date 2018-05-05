import React, { Component } from 'react';

import HeaderChat from '../HeaderChat/HeaderChat.js';
import ContentChat from '../ContentChat/ContentChat.js';
import SendMessageForm from '../SendMessageForm/SendMessageForm.js';

import './Chat.css';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  addNewMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, { id: Date.now(), name: 'Maxim Ryabov', message: message, isOutgoing: true }]
    })
  }

  render() {
    return (
      <div className="chat">
        <HeaderChat />
        <ContentChat messages={this.state.messages} />
        <SendMessageForm onMessageSend={this.addNewMessage}/>
      </div>
    );
  }
}


export default Chat;
