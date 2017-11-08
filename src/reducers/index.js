import { combineReducers } from "redux";

import navigator from "./navigator";

export default combineReducers({
  route: navigator
});
