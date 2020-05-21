import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageList from './MessageList/MessageList';
import AddMessage from './AddMessage/AddMessage';
import { ChatAuth, ResponseMessage } from './Join';

interface Props {
  chatAuth: ChatAuth,
  messages: ResponseMessage[],
  joined: boolean,
  idSocket: string,
  getMessage: (message: ResponseMessage) => void,
  sendMessage: (message: ResponseMessage) => void,
  disconnect: () => void
}

const Chat = (props: Props) => {

  return (
    <div className='chat'>
      <ChatHeader joined={props.joined} disconnect={props.disconnect} />
      <div className='message-list'>
        <MessageList messages={props.messages} authName={props.chatAuth.name} idSocket={props.idSocket} />
      </div>
      <AddMessage
        authName={props.chatAuth.name}
        sendMessage={props.sendMessage}
        id={props.idSocket}
      />
    </div>
  );
};

export default Chat;
