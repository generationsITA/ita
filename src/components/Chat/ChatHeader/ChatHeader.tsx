import React from 'react';
import './ChatHeader.css';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Join from '../Join';

interface Props {
    joined: boolean,
    disconnect: () => void
}

const ChatHeader = (props: Props) => {

    const onClickHandler = (event: any) => {
        props.disconnect();
    }
    return (
        <div className='chat-header'>
            <h3>
                General
                 <button onClick={onClickHandler}>
                    Leave chat
                </button>
            </h3>
        </div>
    );
};

export default ChatHeader;