import { watchSignupUser } from './auth/auth.sagas';
import { watchGetProfileData } from './profile/profile.sagas';
import { takeEvery, all, call, put, fork, take } from 'redux-saga/effects';
import { JoinAction, joined, GetMessageAction, SendMessageAction, getMessage } from './chat/chatActions'
import { JOIN, SEND_MESSAGE, GET_MESSAGE } from './chat/chatConstants';

import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';

// let socket: SocketIOClient.Socket;
// socket = io('http://localhost:5500');

function connectSocket() {
  let socket: SocketIOClient.Socket;
  socket = io('http://localhost:5500');
  return socket;
}


// function* join(action: JoinAction) {
//   try {
//     // yield put(showLoader());
//     // const socket = yield call(connectSocket);
//     socket.emit('join', action.payload, (error: string) => {
//       if (error) {
//         console.log(error)
//       }
//     });
//     yield put(joined());

//   } catch (error) {
//     console.log("Something went wrong")
//   }
// }

// function subscribe(socket: any) {
//   return eventChannel(emit => {
//     const update = (message: any) => {
//       console.log("listened data",message);
//       return  emit(getMessage(message));
//     }
//     console.log("socket listening on get-todos");
//     socket.on('message', update)
//     return () => {};
//   });
// }

// function* read(socket: any) {
//   const channel = yield call(subscribe, socket);
//   while (true) {
//     let action = yield take(channel);
//     console.log("action", action);
//     yield put(action);
//   }
// }

export function* write(socket: any) {
  const join = yield take(JOIN)
    socket.emit('join', join.payload, (error: string) => {
      if (error) {
        console.log(error)
      }
  });
    yield put(joined());
}

export function* flow() {
  const socket = yield call(connectSocket)
  // yield fork(read, socket)
  yield fork(write, socket)
}






// function* sendMessage(action: SendMessageAction) {
//   try {
//     socket.emit('sendMessage', action.payload)
//   } catch (error) {
//     console.log("Something went wrong")
//   }
// }

// function* getMessage(action: any) {
//   try {
//     socket.on('message', action.payload)
//   } catch (error) {
//     console.log("Something went wrong")
//   }
// }


export function* watchJoin() {
  // yield takeEvery(JOIN, join)
}

export function* watchSendMessage() {
  // yield takeEvery(SEND_MESSAGE, sendMessage)
}

export function* watchGetMessage() {
  // yield takeEvery(GET_MESSAGE, getMessage)
}

export default function* rootSaga() {
  yield all([call(watchSignupUser), call(watchGetProfileData), call(watchJoin), call(flow)]);
}
