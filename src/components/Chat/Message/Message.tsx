import React from 'react';
import './Message.css';
import { ResponseMessage } from '..';
import Outgoing from './Outgoing/Outgoing';
import Incoming from './Incoming/Incoming';

interface Props {
    message: ResponseMessage,
    authName: string
}

const Message = (props: Props) => {

  let isSentByCurrentUser = false;
  const trimmedName = props.authName.trim().toLowerCase();

  if(props.message.name === trimmedName) {
    isSentByCurrentUser = true;
  }

  const {name, text} = props.message;
    return (
         isSentByCurrentUser ? (
                <div className='outgoing'>
                  <Outgoing name={name} text={text}/>
                </div>
                ) : (
                  <div className='incoming'>
                    <Incoming name={name} text={text} />
                  </div>
                )
    );
};

export default Message;