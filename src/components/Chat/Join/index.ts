import React from 'react';
import { connect } from 'react-redux';
import { join, getMessage, sendMessage, disconnect } from '@store/chat/chatActions';
import { ChatState } from '@store/chat/chatReducer';
import { Join } from './Join';


export interface ChatAuth {
    name: string,
    room: string
}

export interface ResponseMessage {
    name: string,
    text: string
}
interface ConnectedProps {
    chatAuth: ChatAuth;
    message: ResponseMessage;
    messages: ResponseMessage[],
    joined: boolean
}

export type JoinProps = ConnectedProps &
    ReturnType<typeof mapDispatchToProps>;

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
    },
    disconnect: () => {
        return dispatch(disconnect());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Join);