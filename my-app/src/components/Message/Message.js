import React from 'react';

import avatar from '../Message/avatars/other-users.svg';
import myAvatar from '../Message/avatars/designmr.jpg';


const Message = (props) => (
  <li className={`message  ${props.isOutgoing ? 'message--outgoing' : 'message--incoming'}`} id={props.id}>
    <div className="user-avatar">
      <img src={props.isOutgoing ? myAvatar : avatar } width="72" height="72" alt={props.name}/>
    </div>
    <div className="user-message">
      <address  className="user-message__author">{props.name}</address>
      <p className="user-message__text">{props.message}</p>
    </div>
  </li>
)


export default Message;

