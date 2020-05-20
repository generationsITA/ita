import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';
import { ResponseMessage } from '..';
import ScrollableFeed from 'react-scrollable-feed'

interface Props {
    messages: ResponseMessage[],
    authName: string
}

const MessageList = (props: Props) => {
    return (
        <div className='message-list' id='list'>
            <ScrollableFeed forceScroll={true}>
                {props.messages.map((message, index) => {
                    return (
                        <Message key={index} message={message} authName={props.authName} />
                    )
                })}
            </ScrollableFeed>
        </div>
    );
};

export default MessageList;