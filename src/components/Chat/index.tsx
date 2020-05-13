import React, { useState, useEffect} from 'react';
import './Chat.css';
// import queryString from 'query-string';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import io from 'socket.io-client';

const list = [
  'message 1', 'message 2', 'message 3', 'message 4', 'message 5', 'message 6', 'message 4', 'message 5', 'message 6'
]

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='message-list'>
      <MessageList messages={list} />
      </div>
      <AddMessage />
    </div>
  );
};

export default Chat;
