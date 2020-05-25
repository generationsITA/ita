import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Join.css';
import Chat from '../index';
import { JoinProps, ChatAuth } from '.';

export const Join = (props: JoinProps): JSX.Element => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('general');

  const chatAuth: ChatAuth = {
    name,
    room
  }

  const joinButtonClick = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    props.join(chatAuth);
  }

  const joinForm = (): JSX.Element => {
    return (
      <div className="join-container">
        <div className="join-inner">
          <h1 className="heading">Join Chat</h1>
          <div className='join-row'>
            <TextField
              label='Name'
              variant='outlined'
              type='text'
              onChange={(event) => setName(event.target.value)}
              value={name}
              fullWidth={true}
              data-testid='add-message-input'
              required
            />
          </div>
          <Button
            variant="contained"
            disabled={!name.trim() ? true : false}
            color="primary"
            type="submit"
            fullWidth={true}
            onClick={joinButtonClick}
          >
            Join
          </Button>
        </div>
      </div>
    )
  }

  const { messages, sendMessage, getMessage, joined, disconnect, idSocket } = props;

  return (
    <div>
      {props.joined ? <Chat
        chatAuth={chatAuth}
        messages={messages}
        sendMessage={sendMessage}
        getMessage={getMessage}
        joined={joined}
        disconnect={disconnect}
        idSocket={idSocket}
      /> : joinForm()}
    </div>
  )
};

