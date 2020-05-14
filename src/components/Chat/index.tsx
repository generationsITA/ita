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
  message: RequestMessage,
  messages: ResponseMessage[]
}

class Chat extends Component<Props, State> {

  state: State = {
    message: { text: '' },
    messages: []
  }

  componentDidMount() {
    socket = io('localhost:5500');
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

  setMessage = (message: string) => {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        text: message
      }
    })
  }

  sendMessage = () => {
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
console.log(this.state)

const { messages, message } = this.state;

    return (
      <div className='chat'>
        <ChatHeader />
        <div className='message-list'>
          <MessageList messages={messages} />
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
