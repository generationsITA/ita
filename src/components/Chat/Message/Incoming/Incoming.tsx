import React from 'react';
import './Incoming.css';

interface Props {
    name: string, 
    text: string
}

const Incoming = (props: Props) => {
    const { name, text } = props
    return (
        <div className='incoming-message-container'>
            <h4 className='incoming-message-user'>
                {name}
            </h4>
            <p className='incoming-message-text'>
                {text}
            </p>
        </div>
    );
};

export default Incoming;