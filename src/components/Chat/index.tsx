import React, { useState, useEffect } from 'react';
import './Chat.css';
import queryString from 'query-string'; // should be deleted
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

let socket: SocketIOClient.Socket;

const list = [
  'message 1', 'message 2', 'message 3', 'message 4', 'message 5', 'message 6', 'message 4', 'message 5', 'message 6'
];

interface RequestMessage {
  id?: string,
  text: string
}

interface ResponseMessage {
  name: string,
  text: string
}

const Chat = (props: {location: string} ) => {

  // console.log(props.location.search)

  const params: any = useParams();
  const joinName = params.name
  const joinRoom = params.room

  const [name, setName] = useState('dima');
  const [room, setRoom] = useState('general');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(['']);
  const ENDPOINT = 'localhost:5500';



  useEffect(() => {
    socket = io(ENDPOINT);
    setRoom(joinRoom);
    setName(joinName);

    socket.emit('join', { name }, () => {

    })

    // return () => {
    //   socket.emit('disconnect');

    //   // socket.off();
    // }

  }, [ENDPOINT, props.location.search]);

  useEffect(() => {
    socket.on('message', ( message: ResponseMessage ) => {
      // setMessages(messages => [ ...messages, message ]);
      console.log(message)
    });
  }, []);


const sendMessage = (event: any) => {
  const message: RequestMessage = {
    text: 'text'
  }
  // event.preventDefault();
  // if(message) {
    socket.emit('sendMessage', message)
    // socket.emit('test', message)
  // }
}

// console.log(message)
  

  return (
    <div className='chat'>
      <ChatHeader />
      <div className='message-list'>
        <MessageList messages={list} />
      </div>
      <input type='text' value={message} 
      onChange={(event) => setMessage(event.target.value)} 
      />
      <button onClick={sendMessage}>Send</button>
      {/* <AddMessage
        // handleAddMessage={handleAddMessage}
        message={message}
        setMessage={setMessage} /> */}
    </div>
  );
};

export default Chat;
