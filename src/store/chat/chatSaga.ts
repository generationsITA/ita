import { call, put, fork, take } from 'redux-saga/effects';
import { getMessage, getCurrentSocketId } from '../chat/chatActions'
import { JOIN, SEND_MESSAGE, DISCONNECT } from '../chat/chatConstants';
import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { ResponseMessage } from '@components/Chat/Join';

function connectSocket() {
    let socket: SocketIOClient.Socket;
    socket = io('http://localhost:5500');
    //socket = io('https://ita-chat-app.herokuapp.com/');
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
        yield console.log(action);
    }
}

export function* write(socket: SocketIOClient.Socket) {
    while (true) {
        const sendMessage = yield take(SEND_MESSAGE)
        socket.emit('sendMessage', sendMessage.payload)
    }
}

export function* disconnectSaga(socket: SocketIOClient.Socket) {
    while (true) {
        yield take(DISCONNECT)
        socket.emit('leaveRoom');
        console.log('User leaved chat', socket);
    }
}

function* handleIO(socket: SocketIOClient.Socket) {
    yield fork(read, socket);
    yield fork(write, socket);
    yield fork(disconnectSaga, socket);
}

export function* join(socket: SocketIOClient.Socket) {
    while (true) {
        const join = yield take(JOIN)
        socket.emit('join', join.payload, (error: string) => {
            if (error) {
                console.log(error);
                console.log(socket);
            } else {
                console.log(socket.id);
            }
        });
        yield put(getCurrentSocketId(socket.id));
    };
}

export function* flow() {
    const socket = yield call(connectSocket);
    yield fork(join, socket);
    yield fork(handleIO, socket);
}