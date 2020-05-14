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

const Chat = (props: {location: string} ) => {

  // console.log(props.location.search)

  const params: any = useParams();
  const joinName = params.name
  const joinRoom = params.room

  const [name, setName] = useState('');
  const [room, setRoom] = useState('general');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5500';

  socket = io(ENDPOINT);


  useEffect(() => {
    socket = io(ENDPOINT);
    setRoom(joinRoom);
    setName(joinName)

    socket.emit('join', { name, room }, (error: any) => {
      if(error) {
        // console.log(error)
      }
    });
  }, [ENDPOINT, props.location.search]);

//   useEffect(() => {
//     socket.on('message', (message: any) => {
//       setMessages((messages: any[]) => {
//         return [...messages, message];
//       });
//     });
    
//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
// }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if(message) {
//       socket.emit('sendMessage', message, () => setMessage(''));
//     }
//   }

  return (
    <div className='chat'>
      <ChatHeader />
      <div className='message-list'>
        <MessageList messages={list} />
      </div>
      {/* <AddMessage
        // handleAddMessage={handleAddMessage}
        message={message}
        setMessage={setMessage} /> */}
    </div>
  );
};

export default Chat;
