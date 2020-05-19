import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Join.css';
import Chat from '../Chat';
import { join, getMessage, sendMessage } from '@store/chat/chatActions';
import { connect } from 'react-redux';
import { ChatState } from '@store/chat/chatReducer';
import { ChatAuth, ResponseMessage } from '..';

interface ConnectedProps {
  chatAuth: ChatAuth;
  message: ResponseMessage;
  messages: ResponseMessage[],
  joined: boolean
}

export type ComponentProps = ConnectedProps &
  ReturnType<typeof mapDispatchToProps>;

const Join = (props: ComponentProps) => {
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
            disabled={!name || name === 'System' || name === 'system' ? true : false}
            color="primary"
            type="submit"
            fullWidth={true}
            onClick={ joinButtonClick }
          >
            Join
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {props.joined ? <Chat
      chatAuth={props.chatAuth} 
      messages={props.messages}
      sendMessage={props.sendMessage}
      getMessage={props.getMessage}
      /> : joinForm()}
    </div>

  )
};

const mapStateToProps = (state: { chatReducer: ChatState }): ConnectedProps => {
  return {
    chatAuth: state.chatReducer.chatAuth,
    message: state.chatReducer.message,
    messages: state.chatReducer.messages,
    joined: state.chatReducer.joined
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  join: (chatAuth: ChatAuth) => {
    return dispatch(join(chatAuth))
  },
  getMessage: (message: ResponseMessage) => {
    return dispatch(getMessage(message))
  },
  sendMessage: (message: ResponseMessage) => {
    return dispatch(sendMessage(message))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Join);