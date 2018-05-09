import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Chat from './components/Chat/Chat.js';
import './global/global.css';


ReactDOM.render(
  <Chat />,
  document.getElementById('app')
);
registerServiceWorker();