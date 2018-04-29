import React, { Component } from 'react';

import './HeaderChat.css';


class HeaderChat extends Component {
  render() {
    return (
      <header className='chat__header'>
        <h2 class="chat__user-name">Maxim Ryabov</h2>
      </header>
    );
  }
}


export default HeaderChat;
