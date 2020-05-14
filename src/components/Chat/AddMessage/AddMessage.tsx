import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddMessage.css';

interface Props {
    text: string,
    setMessage: (message: string) => void,
    sendMessage: () => void
}
const AddMessage = (props: Props) => {
    return (
        <div className='add-message-bar'>
                <TextField
                    label='Type a message...'
                    variant='outlined'
                    type='text'
                    onChange={(event) => props.setMessage(event.target.value)}
                    value={props.text}
                    fullWidth={true}
                    data-testid='add-message-input'
                    required
                />
                <Button
                    className="submit"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={props.sendMessage}
                >
                    Send
                </Button>
        </div>
    );
};

export default AddMessage;