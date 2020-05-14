import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddMessage.css';

const AddMessage = () => {
    const [message, setMessage] = useState('')

    const handleInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(event.target.value)
    }

    const handleAddMessage = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(message)
    }
    return (
        <div className='add-message-bar'>
            <form className='add-message-form' onSubmit={handleAddMessage}>

                <TextField
                    label='Type a message...'
                    variant='outlined'
                    type='text'
                    onChange={handleInput}
                    value={message}
                    fullWidth={true}
                    data-testid='add-message-input'
                    required
                />

                <Button
                    className="submit"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send
                </Button>
            </form>

        </div>
    );
};

export default AddMessage;