import React, { Component } from 'react';

import avatar from './vlukianov.jpg';


class IncomingMessage extends Component {
  render() {
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
}


export default IncomingMessage;
