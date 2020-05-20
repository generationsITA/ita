import { call, put, fork, take } from 'redux-saga/effects';
import { joined, getMessage } from '../chat/chatActions'
import { JOIN, SEND_MESSAGE } from '../chat/chatConstants';
import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { ResponseMessage } from '@components/Chat';

function connectSocket() {
    let socket: SocketIOClient.Socket;
    // socket = io('http://localhost:5500');
    socket = io('https://ita-chat-app.herokuapp.com/');
    return socket;
}

function subscribe(socket: SocketIOClient.Socket) {
    return eventChannel(emit => {
        const update = (message: ResponseMessage) => {
            return emit(getMessage(message));
        }
        console.log("socket listening on messages");
        socket.on('message', update)
        return () => { };
    });
}

function* read(socket: SocketIOClient.Socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

export function* write(socket: SocketIOClient.Socket) {
    while (true) {
        const sendMessage = yield take(SEND_MESSAGE)
        socket.emit('sendMessage', sendMessage.payload)
    }
}

function* handleIO(socket: SocketIOClient.Socket) {
    yield fork(read, socket);
    yield fork(write, socket);
}

export function* flow() {
    const socket = yield call(connectSocket)
    const join = yield take(JOIN)
    socket.emit('join', join.payload, (error: string) => {
        if (error) {
            console.log(error);
        }
    });

    // there should be a check for a unique name

    yield put(joined());
    yield fork(handleIO, socket);
}