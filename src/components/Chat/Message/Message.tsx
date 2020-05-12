import React from 'react';
import './Message.css';

interface Props {
    message: string
}

const Message = (props: Props) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
};

export default Message;