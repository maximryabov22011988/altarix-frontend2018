import React, { Component } from 'react';

import avatar from './designmr.jpg';


class OutgoingMessage extends Component {
  render() {
    return (
      <li className="chat__message  outgoing-message">
        <div className="user-avatar">
          <img src={avatar} width="72" height="72" alt=""/>
        </div>
        <div className="user-message">
          <address  className="user-message__author">Maxim Ryabov</address>
          <p className="user-message__text">Слава привет! Да, дизайн и статика готовы :)</p>
        </div>
      </li>
    );
  }
}


export default OutgoingMessage;
