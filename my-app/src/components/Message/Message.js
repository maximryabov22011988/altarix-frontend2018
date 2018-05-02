import React, { Component } from 'react';

import avatar from '../Message/avatars/vlukianov.jpg';
import myAvatar from '../Message/avatars/designmr.jpg';


const Message = ({ isOutgoing }) => (
  <li className={`message  ${isOutgoing ? 'message--outgoing' : 'message--incoming'}`}>
    <div className="user-avatar">
      <img src={avatar} width="72" height="72" alt=""/>
    </div>
    <div className="user-message">
      <address  className="user-message__author">Viacheslav Lukianov</address>
      <p className="user-message__text">Привет! Ты сделал статику для React?</p>
    </div>
  </li>
)


export default Message;

