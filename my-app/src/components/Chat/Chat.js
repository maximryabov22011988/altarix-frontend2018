import React, { Component } from 'react';
import firebase from 'firebase';
import { db } from '../../firebaseConfig';

import HeaderChat from '../HeaderChat/HeaderChat';
import ContentChat from '../ContentChat/ContentChat';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

import './Chat.css';


class Chat extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
  }

  componentDidMount() {
    const messagesRef = db.ref('messages');

    messagesRef.on('value', (snapshot) => {
      const currentMessages = snapshot.val();
      const currentMessagesArr = Object.keys(currentMessages).map(key =>
        ({
            id: key,
            name: currentMessages[key].name,
            text: currentMessages[key].text
        })
      );
      this.setState({
        messages: currentMessagesArr
      })
    });
  }

  addNewMessage = (text) => {
    const now = Date.now();

    const nextMessage = {
      id: now,
      name: 'Максим Рябов',
      text: text
    };

    db.ref(`/messages/${now}`).set(nextMessage);
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
