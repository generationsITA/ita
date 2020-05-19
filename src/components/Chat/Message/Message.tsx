import React from 'react';
import './Message.css';
import Outgoing from './Outgoing/Outgoing';
import Incoming from './Incoming/Incoming';
import System from './System/System';
import { ResponseMessage } from '..';

interface Props {
    message: ResponseMessage,
    authName: string
}

const Message = (props: Props) => {

  const trimmedName = props.authName.trim().toLowerCase();

  const {name, text} = props.message;
    return (
      props.message.name === 'System' ? (
        <div className='system'>
          <System text={text} />
        </div>
      ) : props.message.name === trimmedName ? (
        <div className='outgoing'>
                  <Outgoing name={name} text={text}/>
                </div>
      ) : (
        <div className='incoming'>
        <Incoming name={name} text={text} />
      </div>
      )
    )
};

export default Message;