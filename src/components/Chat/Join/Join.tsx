import React, { useState } from 'react';
import Chat from '../index';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Join.css';

export interface chatAuth {
  name: string,
  room: string
}

const Join = () => {
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [ room, setRoom ] = useState('general');

  const chatAuth = {
    name,
    room
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
                    onChange={(event) => setInput(event.target.value)} 
                    value={input}
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
            onClick={(event)  => { setName(input) }}
          >
            Sign In
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {name ? <Chat chatAuth={chatAuth} /> : joinForm()}
    </div>

  )
};

export default Join;