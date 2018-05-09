import React from 'react';

import defaultAvatar from '../Message/avatars/other-users.svg';
import myAvatar from '../Message/avatars/designmr.jpg';


const Message = ({ id, name, text }) => (
  <li className={`message  ${(name === 'Максим Рябов') ? 'message--outgoing' : 'message--incoming'}`} id={id}>
    <div className="user-avatar">
      <img src={(name === 'Максим Рябов') ? myAvatar : defaultAvatar } width="72" height="72" alt={name}/>
    </div>
    <div className="user-message">
      <address  className="user-message__author">{name}</address>
      <p className="user-message__text">{text}</p>
    </div>
  </li>
)


export default Message;

