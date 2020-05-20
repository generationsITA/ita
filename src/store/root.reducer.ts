import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { profileReducer } from "./profile/profile.reducer";
import { todoReducer } from "./todo/todoReducer";
import { chatReducer } from "./chat/chatReducer";


const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  todoReducer,
  chatReducer
});

export default rootReducer;
