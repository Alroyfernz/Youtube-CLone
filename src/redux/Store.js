import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";
import { homeVideosReducer } from "./reducer/videos.reducer";
import { selectVideoReducer } from "./reducer/videos.reducer";
import { channelDetailsReducer } from "./reducer/channel.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectVideoReducer,
  channelDetails: channelDetailsReducer,
});
const Store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
