import { JOIN, JOINED, GET_MESSAGE, SEND_MESSAGE, DISCONNECT } from './chatConstants';
import { ChatAuth, ResponseMessage } from '@components/Chat/Join';


export interface JoinAction {
    type: typeof JOIN;
    payload: ChatAuth
}

export const join = (payload: ChatAuth): JoinAction => ({
    type: JOIN,
    payload
})

// export interface JoinedAction {
//     type: typeof JOINED;
// }

// export const joined = (): JoinedAction => ({
//     type: JOINED
// })

export interface GetMessageAction {
    type: typeof GET_MESSAGE;
    payload: ResponseMessage
}

export const getMessage = (payload: ResponseMessage): GetMessageAction => ({
    type: GET_MESSAGE,
    payload
})

export interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: ResponseMessage
}

export const sendMessage = (payload: ResponseMessage): SendMessageAction => ({
    type: SEND_MESSAGE,
    payload
})

export interface DisconnectAction {
    type: typeof DISCONNECT;
}

export const disconnect = (): DisconnectAction => ({
    type: DISCONNECT
})

export type chatActions = JoinAction
  //  | JoinedAction
    | GetMessageAction
    | SendMessageAction
    | DisconnectAction;