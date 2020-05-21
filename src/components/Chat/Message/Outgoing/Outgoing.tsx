import React from 'react';
import './Outgoing.css';
import Emoji from 'react-emoji-render';

interface Props {
    name: string,
    text: string
}

const Outgoing = (props: Props): JSX.Element => {
    const { text } = props
    return (
        <div className='outgoing-message-container'>
            <p className='outgoing-message-text'>
                <Emoji text={text} />
            </p>
        </div>
    );
};

export default Outgoing;