import React from 'react';
import './Incoming.css';
import Emoji from 'react-emoji-render';

interface Props {
    name: string,
    text: string
}

export const Incoming = (props: Props): JSX.Element => {
    const { name, text } = props
    return (
        <div className='incoming-message-container'>
            <h4 className='incoming-message-user'>
                {name}
            </h4>
            <p className='incoming-message-text'>
                <Emoji text={text} />
            </p>
        </div>
    );
};