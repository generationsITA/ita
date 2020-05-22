import React from 'react';
import './MessageList.css';
import Message from '../Message';
import { ResponseMessage } from '../Join';
import ScrollableFeed from 'react-scrollable-feed'

interface Props {
    messages: ResponseMessage[],
    authName: string,
    idSocket: string
}

const MessageList = (props: Props): JSX.Element => {
    return (
        <div className='message-list' id='list'>
            <ScrollableFeed forceScroll={true}>
                {props.messages.map((message, index) => {
                    return (
                        <Message key={index}
                            message={message}
                            authName={props.authName}
                            idSocket={props.idSocket}
                        />
                    )
                })}
            </ScrollableFeed>
        </div>
    );
};

export default MessageList;