import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Join.css';
import Chat from '../Chat';
import { JoinProps } from '.';


export const Join = (props: JoinProps) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('general');

  const chatAuth = {
    name,
    room
  }

  const joinButtonClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.join(chatAuth)
  }

  const joinForm = () => {
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
            color="primary"
            type="submit"
            fullWidth={true}
            onClick={joinButtonClick}
          >
            Sign In
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {props.joined ? <Chat
        chatAuth={chatAuth}
        messages={props.messages}
        sendMessage={props.sendMessage}
        getMessage={props.getMessage}
      /> : joinForm()}
    </div>

  )
};

