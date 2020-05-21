import React from 'react';
import './Message.css';
import Outgoing from './Outgoing/Outgoing';
import Incoming from './Incoming/Incoming';
import { ResponseMessage } from '../Join';
import System from './System/System';

interface Props {
  message: ResponseMessage,
  authName: string,
  idSocket: string
}

const Message = (props: Props) => {

  return (
    props.message.id === 'System' ? (
      <div className='system'>
        <System text={props.message.text} />
      </div>
    ) : props.message.id === props.idSocket ? (
      <div className='outgoing'>
        <Outgoing name={props.message.name} text={props.message.text} />
      </div>
    ) : (
          <div className='incoming'>
            <Incoming name={props.message.name} text={props.message.text} />
          </div>
        )
  )
};

export default Message;