import React, { Component } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import io from 'socket.io-client';
import { chatAuth } from './Join/Join';

let socket: SocketIOClient.Socket;

interface RequestMessage {
  id?: string,
  text: string
}

export interface ResponseMessage {
  name: string,
  text: string
}

interface Props {
  chatAuth: chatAuth
}

interface State {
  message: ResponseMessage,
  messages: ResponseMessage[]
}

class Chat extends Component<Props, State> {

  state: State = {
    message: {
      name: '',
      text: ''
    },
    messages: []
  }

  componentDidMount() {
    socket = io('https://ita-chat-app.herokuapp.com/');
    socket.emit('join', this.props.chatAuth, (error: string) => {
      if (error) {
        console.log(error)
      }
    });
    socket.on('message', (message: ResponseMessage) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    });
  }

  componentWillUnmount() {
    socket.emit('disconnect')
  }

  setMessage = (message: string) => {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        name: this.props.chatAuth.name,
        text: message
      }
    })
  }

  sendMessage = () => {
    this.setState({
      messages: [...this.state.messages, this.state.message]
    })

    if (this.state.message.text) {
      socket.emit('sendMessage', this.state.message, () => this.setState({
        ...this.state,
        message: {
          ...this.state.message,
          text: ''
        }
      }))
    }
  }

  render() {

    const { messages, message } = this.state;

    return (
      <div className='chat'>
        <ChatHeader />
        <div className='message-list'>
          <MessageList messages={messages} authName={this.props.chatAuth.name} />
        </div>
        <AddMessage
          text={message.text}
          setMessage={this.setMessage}
          sendMessage={this.sendMessage} />
      </div>
    );
  }

};

export default Chat;
