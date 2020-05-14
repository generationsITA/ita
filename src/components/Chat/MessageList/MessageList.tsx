import React, { Fragment } from 'react';
import './MessageList.css';
import Message from '../Message/Message';
import { ResponseMessage } from '..';

interface Props {
    messages: ResponseMessage[]
}
const MessageList = (props: Props) => {
    return (
        <div className='message-list'>
            {props.messages.map(message => {
                return (
                    <Message message={message.text} />
                )
            })}
        </div>
    );
};

export default MessageList;