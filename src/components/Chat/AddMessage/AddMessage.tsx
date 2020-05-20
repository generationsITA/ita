import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddMessage.css';
import { ResponseMessage } from '../Join';

interface Props {
    authName: string,
    sendMessage: (message: ResponseMessage) => void
}


class AddMessage extends Component<Props> {

    state = {
        name: this.props.authName,
        text: ''
    }

    handleInputChange = (event: { target: { value: string; }; }): void => {
        this.setState({
            text: event.target.value
        })
    }

    // const onSendButton = (event: any) => {
    //     props.sendMessage(message);
    //     this.setState({
    //         text: ''
    //     })
    // }
    onSendButton = (): void => {
        this.props.sendMessage(this.state);
        this.setState({
            text: ''
        })
    }

    handleKeyPress = (event: any) => {
        if (event.key === 'Enter' && this.state.text) {
            this.onSendButton()
        }
    }
    render() {
        return (
            <div className='add-message-bar'>
                {/* <TextField
            label='Type a message...'
            variant='outlined'
            type='text'
            onChange={(event) => setText(event.target.value)}
            value={text}
            fullWidth={true}
            data-testid='add-message-input'
            required
            onKeyPress={event => event.key === 'Enter' ? onSendButton(event) : null}
        />
            <Button
                className="submit"
                variant="contained"
                color="primary"
                type="submit"
                onClick={onSendButton}

            >
                */}
                <TextField
                    label='Type a message...'
                    variant='outlined'
                    type='text'
                    onChange={this.handleInputChange}
                    value={this.state.text}
                    fullWidth={true}
                    // multiline
                    //  rows={2}
                    //  rowsMax={2}
                    data-testid='add-message-input'
                    onKeyPress={this.handleKeyPress}
                />
                <Button
                    disabled={!this.state.text ? true : false}
                    className="submit"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={this.onSendButton}
                >
                    Send
                </Button>
            </div>
        );
    }
};

export default AddMessage;