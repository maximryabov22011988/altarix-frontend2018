import React, { Component } from 'react';


class SendMessageForm extends Component {
  constructor(props){
    super(props);
    this.state = { message: '' };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onMessageSend(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="chat__nav">
        <form className="chat-form" onSubmit={this.handleSubmit}>
          <textarea className="chat-form__field" placeholder="Введите текст сообщения ..." required value={this.state.message} onChange={this.handleMessageChange}></textarea>
          <button className="chat-form__btn" type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}


export default SendMessageForm;
