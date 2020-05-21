import { chatActions } from './chatActions';
import {
    JOIN, JOINED, GET_MESSAGE, SEND_MESSAGE, DISCONNECT, CURRENT_SOCKET_ID
} from './chatConstants';
import { ChatAuth, ResponseMessage } from '@components/Chat/Join';

export interface ChatState {
    chatAuth: ChatAuth,
    message: ResponseMessage,
    messages: ResponseMessage[],
    joined: boolean,
    idSocket: string
}

const initialState: ChatState = {
    chatAuth: {
        name: '',
        room: ''
    },
    message: {
        name: '',
        text: '',
        id: ''
    },
    messages: [],
    idSocket: '',
    joined: false
}

export const chatReducer = (state = initialState, action: chatActions): ChatState => {
    switch (action.type) {
        case JOIN:
            return {
                ...state,
                chatAuth: action.payload,
                joined: true
            }
        case JOINED:
            return {
                ...state,
                joined: true
            }
        case GET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case DISCONNECT:
            return {
                ...state,
                joined: false
            }
        case CURRENT_SOCKET_ID:
            return {
                ...state,
                idSocket: action.payload
            }
        default:
            return state;
    }
}