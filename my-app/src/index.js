import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './components/Chat/Chat.js';
import './global/global.css';


ReactDOM.render(
  <Chat />,
  document.querySelector('.chat')
);
