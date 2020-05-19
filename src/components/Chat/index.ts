
 import React from 'react';
// import { connect } from 'react-redux';
// import { join, getMessage, sendMessage } from '@store/chat/chatActions';
// import { ChatState } from '@store/chat/chatReducer';
// import { Chat } from './Chat';

// export interface ResponseMessage {
//   name: string,
//   text: string
// }

// interface ConnectedProps {
//   nickName: string,
//   message: ResponseMessage;
//   messages: ResponseMessage[]
// }

// export type ChatContainerProps = ConnectedProps &
//   ReturnType<typeof mapDispatchToProps>;

// const mapStateToProps = (state: { chatReducer: ChatState }): ConnectedProps => {
//   return {
//     nickName: state.chatReducer.authName,
//     message: state.chatReducer.message,
//     messages: state.chatReducer.messages,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => ({
//   getMessage: (message: ResponseMessage) => {
//     return dispatch(getMessage(message))
//   },
//   sendMessage: (message: ResponseMessage) => {
//     return dispatch(sendMessage(message))
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Chat);