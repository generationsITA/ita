import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddMessage.css';
import { ResponseMessage } from '..';

interface Props {
    authName: string,
    sendMessage: (message: ResponseMessage) => void
}
const AddMessage = (props: Props) => {

    const [text, setText] = useState('')

    let message = {
        name: props.authName,
        text: text
    }

    const onSendButton = (event: any) => {
        props.sendMessage(message);
    }

    return (
        <div className='add-message-bar'>
                <TextField
                    label='Type a message...'
                    variant='outlined'
                    type='text'
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    fullWidth={true}
                    data-testid='add-message-input'
                    required
                    onKeyPress={ (event) => event.key === 'Enter' ? props.sendMessage : null }
                />
                <Button
                    className="submit"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={onSendButton}
                   
                >
                    Send
                </Button>
        </div>
    );
};

export default AddMessage;