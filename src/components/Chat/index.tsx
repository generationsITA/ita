import React, { useState, useEffect } from 'react';
import './Chat.css';
//import queryString from 'query-string';
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
  const [list, setMessages] = useState([
    'message 1', 'message 2', 'message 3', 'message 4', 'message 5', 'message 6', 'message 4', 'message 5', 'message 6'
  ]);
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
      //  setMessages([...list, message])
    })
  }, [message]);

  const handleAddMessage = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(message);
    setMessages([...list, message]);
    setMessage('');
  }

  return (
    <div className='chat'>
      <ChatHeader />
      <div className='message-list'>
        <MessageList messages={list} />
      </div>
      <AddMessage
        handleAddMessage={handleAddMessage}
        message={message}
        setMessage={setMessage} />
    </div>
  );
};

export default Chat;
