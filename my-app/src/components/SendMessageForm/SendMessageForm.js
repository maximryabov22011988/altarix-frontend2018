import React, { Component } from 'react';

import './SendMessageForm.css';


class SendMessageForm extends Component {
  render() {
    return (
      <div className="chat__nav">
        <form className="chat-form" action="#" method="post">
          <textarea className="chat-form__field" placeholder="Введите текст сообщения ..."></textarea>
          <button className="chat-form__btn" type="button">Отправить</button>
        </form>
      </div>
    );
  }
}


export default SendMessageForm;
