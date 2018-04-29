import React, { Component } from 'react';

import avatar from '../Message/avatars/vlukianov.jpg';
import myAvatar from '../Message/avatars/designmr.jpg';

import './Message.css';


function Message(props) {
  const isOutgoing = props.isOutgoing;
  if (isOutgoing) {
    return (
      <li className="chat__message  outgoing-message">
        <div className="user-avatar">
          <img src={myAvatar} width="72" height="72" alt=""/>
        </div>
        <div className="user-message">
          <address  className="user-message__author">Maxim Ryabov</address>
          <p className="user-message__text">Слава привет! Да, дизайн и статика готовы :)</p>
        </div>
      </li>
    );
  }

  return (
    <li className="chat__message  incoming-message">
      <div className="user-avatar">
        <img src={avatar} width="72" height="72" alt=""/>
      </div>
      <div className="user-message">
        <address  className="user-message__author">Viacheslav Lukianov</address>
        <p className="user-message__text">Привет! Ты сделал статику для React?</p>
      </div>
    </li>
  );
}


export default Message;

