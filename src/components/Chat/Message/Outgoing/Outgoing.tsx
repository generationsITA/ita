import React from 'react';
import './Outgoing.css';

interface Props {
    name: string, 
    text: string
}

const Outgoing = (props: Props) => {
    const { text } = props
    return (
        <div className='outgoing-message-container'>
            <p className='outgoing-message-text'>
                {text}
            </p>
        </div>
    );
};

export default Outgoing;