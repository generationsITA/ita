import React, { Fragment } from 'react';
import './Message.css';

interface Props {
    message: string
}

const user = true

const Message = (props: Props) => {

    return (
        user
      ? (
        <div className='message-container justify-end'>
          <div className='message-box background-outgoing'>
            <p className='message-text color-white'>
                {props.message}
            </p>
          </div>
        </div>
        )
        : (
          <div className='message-container justify-start'>
            <div className='message-box background-incoming'>
              <p className='message-text color-dark'>
                  {props.message}
            </p>
            </div>
          </div>
        )
    );
};

export default Message;