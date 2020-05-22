import React from 'react';
import './System.css';

interface Props {
    text: string
}

export const System = (props: Props): JSX.Element => {
    const { text } = props
    return (
        <div className='system-message-container'>
            <p className='system-message-text'>
                {text}
            </p>
        </div>
    );
};