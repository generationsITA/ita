import React from 'react';
import { connect } from 'react-redux';
import { join, getMessage, sendMessage } from '@store/chat/chatActions';
import { ChatState } from '@store/chat/chatReducer';
import { Join } from '../Join/Join';

export interface ChatAuth {
    name: string,
    room: string
}

export interface ResponseMessage {
    name: string,
    text: string
}

interface ConnectedProps {
    chatAuth: ChatAuth,
    joined: boolean
}

export type JoinProps = ConnectedProps &
    ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: { chatReducer: ChatState }): ConnectedProps => {
    return {
        chatAuth: state.chatReducer.chatAuth,
        joined: state.chatReducer.joined
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    join: (chatAuth: ChatAuth) => {
        return dispatch(join(chatAuth))
    },
    // setNickname: (p: string) => {
    //     return dispatch(setNickname(p));
    // }
    getMessage: (message: ResponseMessage) => {
        return dispatch(getMessage(message))
    },
    sendMessage: (message: ResponseMessage) => {
        return dispatch(sendMessage(message))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Join);