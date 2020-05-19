import { chatActions } from './chatActions';
import {
    JOIN, JOINED, GET_MESSAGE, SEND_MESSAGE, DISCONNECT
} from './chatConstants';
import { ChatAuth, ResponseMessage } from '@components/Chat/Join';

export interface ChatState {
    chatAuth: ChatAuth,
    message: ResponseMessage,
    messages: ResponseMessage[],
    joined: boolean
}

const initialState: ChatState = {
    chatAuth: {
        name: '',
        room: ''
    },
    message: {
        name: '',
        text: ''
    },
    messages: [],
    joined: false
}

export const chatReducer = (state = initialState, action: chatActions): ChatState => {
    switch (action.type) {
        case JOIN:
            return {
                ...state,
                chatAuth: action.payload
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
        default:
            return state;
    }
}