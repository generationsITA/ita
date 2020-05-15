import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';
import { ResponseMessage } from '..';

interface Props {
    messages: ResponseMessage[],
    authName: string
}
const MessageList = (props: Props) => {
    return (
        <div className='message-list'>
            {props.messages.map((message, index) => {
                return (
                    <Message key={index} message={message} authName={props.authName} />
                )
            })}
        </div>
    );
};

export default MessageList;