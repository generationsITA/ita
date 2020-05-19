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

    const onSendButton = (): void => {
        props.sendMessage(message);
        setText('');
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
                    multiline
                    rowsMax={1}
                    data-testid='add-message-input'
                    required
                    onKeyPress={ (e) => {
                        if (e.key === 'Enter') {
                          onSendButton()
                        }
                    }}
                />
                <Button
                    disabled={!text ? true : false}
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