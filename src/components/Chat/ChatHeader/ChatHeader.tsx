import React from 'react';
import './ChatHeader.css';

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