import React, { useState, useEffect} from 'react';
import './Chat.css';
// import queryString from 'query-string';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import io from 'socket.io-client';
import { Socket } from 'net';

const list = [
  'message 1', 'message 2', 'message 3', 'message 4', 'message 5', 'message 6', 'message 4', 'message 5', 'message 6'
];
const ENDPOINT = 'localhost:5500';

const Chat = () => {

  const [name, setName] = useState('username');
  const [messages, setMessages] = useState(list);
  const [message, setMessage] = useState('');
  const socket = io(ENDPOINT);

  useEffect(() => {

    socket.emit('Join', { name }, () => {
    });

    return () => {
      socket.emit('disconnect');
      //  socket.off(event: Event | undefined);
    }

  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', () => {
      setMessages([...list, message])
    })
  }, [message]);

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
