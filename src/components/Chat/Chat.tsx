import React, { Component } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import { ChatAuth, ResponseMessage } from '.';

interface Props {
  chatAuth: ChatAuth,
  messages: ResponseMessage[],
  getMessage: (message: ResponseMessage) => void,
  sendMessage: (message: ResponseMessage) => void
}

const Chat = (props: Props) => {

    return (
      <div className='chat'>
        <ChatHeader />
        <div className='message-list'>
          <MessageList messages={props.messages} authName={props.chatAuth.name} />
        </div>
        <AddMessage
          authName={props.chatAuth.name}
          sendMessage={props.sendMessage} />
      </div>
    );
};

export default Chat;
