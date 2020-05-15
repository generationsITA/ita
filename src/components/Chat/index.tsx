import React, { useState, useEffect, Component } from 'react';
import './Chat.css';
// import queryString from 'query-string'; // should be deleted
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import io from 'socket.io-client';
// import { useLocation } from 'react-router-dom';

let socket: SocketIOClient.Socket;

interface RequestMessage {
  id?: string,
  text: string
}

interface ResponseMessage {
  name: string,
  text: string
}

interface Props {
  name: string
}

interface State {
  message: RequestMessage,
  messages: ResponseMessage[]
}

class Chat extends Component<Props, State> {

  state: State = {
    message: { text: '' },
    messages: []
  }

  componentDidMount() {
    socket = io('https://ita-chat-app.herokuapp.com');
    socket.emit('join', this.props.name, (error: string) => {
      if (error) {
        console.log(error)
      }
    })
    socket.on('message', (message: ResponseMessage) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    });
  }

  handleInput = (event: { target: { value: string; }; }) => {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        text: event.target.value
      }

    })
  }

  sendMessage = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (this.state.message.text) {
      socket.emit('sendMessage', this.state.message)
    }
  }

  render() {

    console.log(this.state)

    return (
      <div className='chat'>
        <ChatHeader />
        <div className='message-list'>
          {/* <MessageList messages={this.state.messages} /> */}
        </div>
        <input type='text' value={this.state.message.text}
          onChange={this.handleInput}
        />
        <button onClick={this.sendMessage}>Send</button>
        {/* <AddMessage
        // handleAddMessage={handleAddMessage}
        message={message}
        setMessage={setMessage} /> */}
      </div>
    );
  }

};

export default Chat;
