import React from 'react';
import './ChatHeader.css';
import Button from '@material-ui/core/Button';

interface Props {
    joined: boolean,
    disconnect: () => void
}

export const ChatHeader = (props: Props) => {

    const onClickHandler = (event: any) => {
        props.disconnect();
    }
    return (
        <div className='chat-header'>
            <h3>
                General
            </h3>
            <form>
                <Button
                    variant="text"
                    onClick={onClickHandler}>
                    Leave
                </Button>

            </form>
        </div>
    );
};