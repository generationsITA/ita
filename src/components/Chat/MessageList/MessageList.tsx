import React, { Fragment } from 'react';
import './MessageList.css';
import Message from '../Message/Message';

interface Props {
    messages: string[]
}
const MessageList = (props: Props) => {
    return (
        <div className='message-list'>
            {props.messages.map(message => {
                return (
                    <Message message={message} />
                )
            })}
        </div>
    );
};

export default MessageList;